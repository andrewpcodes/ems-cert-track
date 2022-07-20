import { useState } from "react";
import { Storage } from "aws-amplify";

function Profile() {
  const [fileData, setFileData] = useState<File>();
  const [fileStatus, setFileStatus] = useState(false);

  const uploadFile = async () => {
    const result = await Storage.put(fileData!.name!, fileData, {
      contentType: fileData?.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setFileData(e.target!.files![0])} />
      </div>
      <div>
        <button onClick={uploadFile}></button>
      </div>
    </div>
  );
}

export default Profile;
