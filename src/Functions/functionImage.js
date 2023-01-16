import axios from "axios";
import server_ip from "../serverIP";

function functionImage(formData) {
    axios({
        url: "http://" + server_ip + ":8000/back/image_test/",
        data: formData,
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

export default functionImage;