const usuarioController = {
    index: (req, res) => {  
    res.render("/");
    },
    
    productos: (req, res) => {  
      res.render("/productos");
      },
    // listado: (req, res) => {  
    //     res.render("/listado");
    //     },
    detalle: (req, res) => {  
          res.render("/detalle");
          },
    login: (req, res) => {  
            res.render("/login");
            }
  };
  
  module.exports = usuarioController;