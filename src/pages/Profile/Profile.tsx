import React, { useState } from "react";
import Amplify from "aws-amplify";
import { Storage } from "aws-amplify";
import {
    Box,
    Container,
    CssBaseline,
    Typography,
    Button,
    TextField,
    Alert,
    Grid,
    Link,
    Divider,
} from "@mui/material";
import { render } from "@testing-library/react";

function Profile() {
    const [fileData, setFileData] = useState<File>();
    const [fileStatus, setFileStatus] = useState(false);
    const [alert, setAlert] = useState(false);
    const [badAlert, setBadAlert] = useState(false);

    const uploadCertification = async () => {
        try {
            if (fileData == undefined) {
                throw ("Bad file.");
            }
            console.log(fileData!.name);
        const result = await Storage.put("certification.pdf", fileData, {
            contentType: fileData?.type,
            level: "private",
        });
        setFileStatus(true);
        setAlert(true);
        console.log(21, result);
    } catch(error) {
        setBadAlert(true);
    }
    };

    const uploadResume = async () => {
        try {
            if (fileData == undefined) {
                throw ("Bad file.");
            }
            console.log(fileData!.name);
            const result = await Storage.put("resume.pdf", fileData, {
                contentType: fileData?.type,
                level: "private",
            });
            setFileStatus(true);
            setAlert(true);
            console.log(21, result);
        } catch (error) {
            setBadAlert(true);
        }
    };

    const downloadResume = async () => {
        const result = await Storage.get(`resume.pdf`, {
            download: false,
            level: "private",

        });
        console.log(result);
        window.open(result);

        };

    const downloadCertification = async () => {
        const result = await Storage.get(`certification.pdf`, {
            download: false,
            level: "private",

        });
        console.log(result);
        window.open(result);

    };


    return (
    <>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                    }}
                >    
    <div>
        <Divider />
        <div>
            <Button variant="contained" component="label">Upload File
            <input type="file" hidden onChange={(e) => setFileData(e.target.files![0])} />
            </Button>
                <div >{fileData?.name}</div>
        </div>
        <div>
            <Button onClick={uploadResume}>Upload Resume</Button>
                        
            <Button onClick={uploadCertification}>Upload Certification</Button>
        </div>
        <Divider />
                        <div>
                            <Button onClick={downloadResume}>Download Resume</Button>
                        
                            <Button onClick={downloadCertification}>Download Certification</Button>
                        </div>
                    </div> 
                    {alert ? (
                        <Alert onClose={() => setAlert(false)} severity="success">
                  File Upload Successful.
                </Alert>
                    ) : null}

                    {badAlert ? (
                        <Alert onClose={() => setBadAlert(false)} severity="error">
                            File Upload Unsuccessful.
                        </Alert>
                    ) : null}
    </Box>
    </Container>
    </>

    );
}

export default Profile;