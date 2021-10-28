import { http } from './socket';
import { PORT } from './constant';
 

http.listen(PORT, () => {
  console.log('Server running on port : ' + PORT);
});
