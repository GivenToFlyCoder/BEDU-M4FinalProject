const Twitter = require('../modules/Twitter')

function postTwitter(req, res) {

    const form = req.body
    console.log('form:', form)
    console.log(form.state_name, form.topic, form.quantity)

    const query = [
        {
            '$match': {
                '$or': [
                    {
                        'state_name': {
                            '$regex': new RegExp(form.state_name, 'i')
                        }
                    }, {
                        'clean_text': {
                            '$regex': new RegExp(form.state_name, 'i')
                        }
                    }, {
                        'hashtags': {
                            '$regex': new RegExp(form.state_name, 'i')
                        }
                    }, {
                        'location': {
                            '$regex': new RegExp(form.state_name, 'i')
                        }
                    }
                ]
            }
        }, {
            '$match': {
                'clean_text': {
                    '$regex': new RegExp(form.topic, 'i')
                }
            }
        }, {
            '$limit': parseInt(form.quantity)
        }
    ]

    console.log("query:", query)

    Twitter.aggregate(query)
        .then(data => {
            data.length > 0 ?
                (
                    console.log('type of data:', typeof (data), 'lenght of data:', data.length),
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
    postTwitter
}