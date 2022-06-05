
const create = async (req, res, next) => {
    try {
        return res.send(req.body);
        //return res.send("Catalog option create update");
    } catch (error) {
        return res.json({
          status: 500,
          msg: error.message,
        });
    }
};

const list = () => {

}


//export controller functions
module.exports = {
  create,
  list,
  //deleteAllTea,
  //getOneTea,
  //newComment,
  //deleteOneTea,
};
