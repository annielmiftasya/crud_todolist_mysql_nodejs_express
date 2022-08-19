const {todolist} = require('../models')

module.exports = class {
   static async createTodo (req, res, next) {
      try {
          const list = await todolist.create({
              name: req.body.name,
              status:"pending"
          })
          res.status(200).send({
              status: 200,
              message: 'Data list berhasil ditambah!',
              data: list
          })
      } catch (error) {
          console.log(error);
          res.status(500).send(error)
      }
  }

    static async getTodo(req, res, next) {
        try {
         const list = await todolist.findAll()
         res.status(200).send({
             status: 200,
             message: 'Berhasil',
             data: list
         })
     } catch (error) {
         console.log(error);
         res.status(500).send(error)
     }
    }

    static async getbyIdTodo(req, res, next) {
      try {
       const list = await todolist.findOne({
          where: {id: req.params.id} 
      })
       res.status(200).send({
           status: 200,
           message: 'Berhasil',
           data: list
       })
   } catch (error) {
       console.log(error);
       res.status(500).send(error)
   }
  }

    static async updateTodo(req, res, next) {
       try {
         const coba = await todolist.update(
            {
               status:"success"
            },{where: {id: req.params.id},returning: true})
         res.status(200).send({
            status: 200,
            message: 'Data Berhasil Di Update',
            data: coba
         })
       } catch (error) {
         console.log(error);
         res.status(500).send(error)
      }
    }
    static async deleteTodo(req, res, next) {
        try {
         const list = await todolist.destroy(
            {where: {id: req.params.id}})
         res.status(200).send({
            status: 200,
            message: 'Data Berhasil Di hapus',
            data: list
         })
       } catch (error) {
         console.log(error);
         res.status(500).send(error)
      }
        }

}