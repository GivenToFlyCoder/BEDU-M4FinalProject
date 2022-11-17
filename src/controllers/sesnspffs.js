const SesnspFF = require('../modules/SesnspFF')

function getSesnspFFSearch(req, res) {

  const form = req.body
  console.log('form:', form)

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
                    '$or': [
                        {
                            'law': {
                                '$regex': new RegExp(form.modality, 'i')
                            }
                        }, {
                            'concept': {
                                '$regex': new RegExp(form.modality, 'i')
                            }
                        }, {
                            'description': {
                                '$regex': new RegExp(form.modality, 'i')
                            }
                        }
                    ]
                }
            }, {
                '$match': {
                    'year': {
                        '$gte': parseInt(form.year)
                    }
                }
            },
            {
                '$limit': parseInt(form.quantity)
            }
        ]

  console.log("query:", query)

  SesnspFF.aggregate(query)
  .then(data => {
    data.length > 0 ?
        (
            console.log('type of data:', typeof (data), 'lenght of data:', data.length),
            res.status(200).send(data)
        )
        :
        (
            console.log(`No Match Found! State: ${form.state_name}, Quantity: ${form.quantity}`),
            res.status(404).send(`No Data Match Found! State: ${form.state_name}, Quantity: ${form.quantity}`)
        )
})
.catch(err => res.status(500).send(err))

}

module.exports = {
  getSesnspFFSearch
}