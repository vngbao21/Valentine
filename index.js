const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Thiết lập middleware để phục vụ các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
