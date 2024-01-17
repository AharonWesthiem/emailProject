const emailModel = require("../model/email.model");
 
 

async function create(data) {
  return await emailModel.create(data);
}

async function read(filter) {
  return await emailModel.find({ ...filter, status: { $nin: ["trash"] } });
}
async function readOne(filter) {
  return await emailModel.findOne({ ...filter, status: { $nin: ["trash"] } });
}

async function readTrash(email) {
  const query = emailModel.find();
  const myQuery = query.or([
    { to: email, status: "trash" },
    { from: email, status: "trash" },
  ]);
  const trash = await myQuery.exec();
  return trash;

}
  // async function getUnread(email) {
  //   const query = emailModel.find();
  //   const myQuery = query.or([
  //     { to: email, status: "unread" },
  //     { from: email, status: "unread" },
  //   ]);
  //   const unread = await myQuery.exec();
  //   return unread;
  // }

  async function update(id, data) {
    return await emailModel.updateOne({ _id: id }, { status: data });
  }

 


module.exports = {
  create,
  read,
  readOne,
  readTrash,
  update,
  // getUnread,
};
