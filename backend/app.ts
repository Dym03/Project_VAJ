import express from 'express';
import gradeValueRoutes from './routes/gradeValueRoutes';
import boulderRoutes from './routes/boulderRoutes';
import boulderGymRoutes from './routes/boulderGymRoutes';

const app = express();
app.use(express.json());

app.use('/api', gradeValueRoutes);
app.use('/api', boulderRoutes);
app.use('/api', boulderGymRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
