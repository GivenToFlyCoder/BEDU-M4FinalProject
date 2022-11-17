const SesnspFC = require('../modules/SesnspFC')

function getSesnspFCSearch(req, res) {

    const form = req.body
    console.log('form:', form)
    console.log(form.state_name, form.modality, form.year, form.quantity)

    const query =
        [
            {
                '$match': {
                    'state_name': {
                        '$regex': new RegExp(form.state_name, 'i')
                    }
                }
            }, {
                '$match': {
                    'modality': {
                        '$regex': new RegExp(form.modality, 'i')
                    }
                }
            }, {
                '$match': {
                    'year': {
                        '$gte': form.year
                    }
                }
            },
            {
                '$limit': parseInt(form.quantity)
            }
        ]

    console.log("query:", query)

    SesnspFC.aggregate(query)
        .then(data => {
            data.length > 0 ?
                (
                    console.log('type of data:', typeof (data), 'lenght of data:', data.length, data[0]._id),
                    res.status(200).send(data)
                )
                :
                (
                    console.log(`No Match Found! State: ${form.state_name}, Quantity: ${form.quantity}`),
                    res.status(200).send(`No Match Found! State: ${form.state_name}, Quantity: ${form.quantity}`)
                )
        })
        .catch(err => res.status(500).send(err))

}

module.exports = {
    getSesnspFCSearch
}