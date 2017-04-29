/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    minusHp: function(req, res) {
        var userId = req.session.userId;;
        var value = req.param('value')
        var hp;
        Pet.find({
            userId: userId
        }).exec(function(err, pet) {
            if (err)
                return res.negotiate(err)
            else {
                hp = pet.hp
                Pet.update({
                    userId: userId
                }, {
                    userId: userId,
                    hp: hp - value
                }).exec(function(err, pet) {
                    if (err)
                        return res.negotiate(err)
                    else {
                        return res.json({
                            result: "ok"
                        })
                    }
                })
            }

        })

    },
    addHp: function(req, res) {
        var userId = req.session.userId;;
        var value = req.param('value')
        var hp;
        Pet.find({
            userId: userId
        }).exec(function(err, pet) {
            if (err)
                return res.negotiate(err)
            else {
                hp = pet.hp
                Pet.update({
                    userId: userId
                }, {
                    userId: userId,
                    hp: hp + value
                }).exec(function(err, pet) {
                    if (err)
                        return res.negotiate(err)
                    else {
                        return res.json({
                            result: "ok"
                        })
                    }
                })
            }

        })

    }

};