import mongoose from 'mongoose'
import app from './app.js';
import chalk from 'chalk'

const dburi = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dportalaws.uynzl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(dburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log(chalk.bold.yellowBright("database connected and running"));
}).catch(err => {
  console.log(err);
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(chalk.bold.blueBright(`App running on port ${port}`));
})