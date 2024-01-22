const emailModel = require("../model/email.model");
 
 

async function create(data) {
  return await emailModel.create(data);
}

async function read(filter) {
  return await emailModel.find({ ...filter,"tags.status": { $ne: ["trash"] } });
}
async function readToUpdate(id, email ,update) {
  console.log(id, email ,update)
  return await emailModel.updateOne(
  {_id:id ,"tags.email":email},
  { $addToSet:{ "tags.$.status":update}});
}


async function readOne(filter) {
  return await emailModel.findOne({ ...filter, status: { $nin: ["trash"] } });
}

async function update(id, data) {
  return await emailModel.updateOne({ _id: id }, { "tags.status": data });
}
// async function readTrash(email) {
// //לחפש הודעה שיש לה אובייקט +trash
//   const query = emailModel.find();
//   const myQuery = query.or([
//     { to: email, status: "trash" },
//     { from: email, status: "trash" },
//   ]);
//   const trash = await myQuery.exec();
//   return trash;

// }
  // async function getUnread(email) {
  //   const query = emailModel.find();
  //   const myQuery = query.or([
  //     { to: email, status: "unread" },
  //     { from: email, status: "unread" },
  //   ]);
  //   const unread = await myQuery.exec();
  //   return unread;
  // }


 


module.exports = {
  create,
  read,
  readOne,
  update,
  readToUpdate
  // getUnread,
};
