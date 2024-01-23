const emailModel = require("../model/email.model");



async function create(data) {
  return await emailModel.create(data);
}

async function read(filter) {
  return await emailModel.find({ ...filter, "tags.status": { $ne: ["trash"] } });
}
async function readTresh(email ,status) {
  const query = emailModel.find();
    const myQuery = query.or([
      { to: email, "tags.status":status},
      { from: email, "tags.status":status },
    ]);
    const trash = await myQuery.exec();
      return trash;
  // return await emailModel.find({ ...filter, "tags.status":"trash"});
}

async function readToUpdate(id, email, update) {

  console.log(id, email, update)
  if (update == "trash") {
    console.log(update)
    return await emailModel.updateOne(
      { _id: id, "tags.email": email },
      { $addToSet: { "tags.$.status":{$each:[update] }} });
  }


  if (update =="read") {
    console.log(update)
    return await emailModel.updateOne(
      { _id: id,
      "tags.email": email ,
      "tags.status": ["unread"] },
      { $set: { "tags.$.status.$": update } });
  }
}


async function readOne(filter) {
  return await emailModel.findOne({ ...filter, status: { $nin: ["trash"] } });
}

async function update(id, data) {
  return await emailModel.updateOne({ _id: id }, { "tags.status": data });
}






module.exports = {
  create,
  read,
  readOne,
  update,
  readToUpdate,
  readTresh
  // getUnread,
};
