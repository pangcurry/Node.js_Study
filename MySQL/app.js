const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sequelize = require('./models').sequelize;

const app = express();
sequelize.sync();
