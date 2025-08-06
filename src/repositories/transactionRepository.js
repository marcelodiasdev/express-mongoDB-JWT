import transactionSchema from "../schemas/Transaction.js";

async function create(data) {
  return transactionSchema.create(data);
}

export default { create };
