//import Schema and Model of Facebook Collectiob, from modules. 
const Facebook = require('../modules/Facebook')

//GET
function getFacebook(req, res) {

    const state = req.query.state_name
    const quantity = parseInt(req.query.quantity)
    console.log(state, quantity)

    // const query = [
    //     {
    //         '$match': {
    //             'state_name': state
    //         }
    //     },
    //     {
    //         '$limit': quantity
    //     }
    // ]

    const query = state != "all" ?
        [
            {
                '$match': {
                    'state_name': state
                }
            },
            {
                '$limit': quantity
            }
        ]
        :
        [
            {
                '$limit': quantity
            }
        ]

    Facebook.aggregate(query)
        .then(data => {
            data.length > 0 ?
                (
                    console.log('Data Found!!! Type of data:', typeof (data), 'lenght of data:', data.length),
                    res.status(200).send(data)
                )
                :
                (
                    console.log('type of data:', typeof (data), 'lenght of data:', data.length),
                    res.status(200).send(`No Match Found! State: ${state}, Quantity: ${quantity}`)
                )
        })
        .catch(err => res.status(500).send(err))
}

//POST 
function postFacebookSearch(req, res) {

    const form = req.body
    console.log(form)
    console.log(form.state_name, form.topic, form.quantity)

    const query = [
        {
            '$match': {
                'state_name': {
                    '$regex': new RegExp(form.state_name, 'i')
                }
            }
        }, {
            '$match': {
                'clean_text': {
                    '$regex': new RegExp(form.topic, 'i')
                }
            }
        }, {
            '$limit': form.quantity
        }
    ]

    console.log("query:", query)

    Facebook.aggregate(query)
        .then(data => {
            data.length > 0 ?
                (
                    console.log('type of data:', typeof (data), 'lenght of data:', data.length),
                    res.status(200).send(data)
                )
                :
                (
                    console.log('type of data:', typeof (data), 'lenght of data:', data.length),
                    res.status(200).send(`No Match Found! State: ${form.state_name}, Topic: ${form.topic}, Quantity: ${form.quantity}`)
                )
        })
        .catch(err => res.status(500).send(err))
}

//POST ADD FACEBOOK DOCUMENT IN COLLECTION
function postFacebookAdd(req, res) {
    const metadata = req.body
    const document = new Facebook(metadata)
    const id = req.body.id

    const query = [
        {
            '$match': {
                'id': id
            }
        }
    ]

    console.log("req.body.id:", req.body.id)
    console.log(query)

    Facebook.aggregate(query)
        .then(result => {

            result.length == 0 ?

                (
                    document.save()
                        .then(
                            console.log('Document succesfully added to collection:', metadata),
                            res.status(200).send(metadata)
                        )
                        .catch(err => res.status(500).send(err))
                )
                :
                (
                    console.log(`ID document already exist! ${id}`),
                    res.status(200).send(`ID document already exist! ${id}`)
                )
        })
}

//DELETE
function deleteFacebook(req, res) {
    const idDelete = req.query.id
    Facebook.findOneAndDelete({ id: idDelete })
        .then(
            data => {
                data != null ?
                    (
                        console.log('Document succesfully deleted:', data),
                        res.status(200).send(data)
                    )
                    :
                    (
                        console.log(`Nothing to delete! Id ${idDelete} no exist!`),
                        res.status(200).send(`Nothing to delete! Id ${idDelete} no exist!`)
                    )
            }
        )
        .catch(err => res.status(500).send(err))
}

//UPDATE
function updateFacebook(req, res) {

    const idUpdate = req.params.id
    const updates = req.body
    console.log(idUpdate)

    Facebook.findOne({ id: idUpdate })
        .then(
            async (itemFound) => {

                itemFound != null ?
                    (
                        itemFound.username = updates.username,
                        itemFound.state_name = updates.state_name,
                        itemFound.text = updates.text,
                        itemFound.clean_text = updates.clean_text,
                        await itemFound.save(),
                        console.log('itemFound:', itemFound),
                        res.status(200).send(itemFound)
                    )
                    :
                    (
                        console.log('itemFound not found:', itemFound),
                        res.status(200).send(`itemFound not found: ${idUpdate}`)
                    )
            }

        )
}

module.exports = {
    getFacebook,
    postFacebookSearch,
    postFacebookAdd,
    deleteFacebook,
    updateFacebook
}