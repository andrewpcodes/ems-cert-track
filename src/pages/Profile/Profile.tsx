import { useState } from "react";
import { Storage } from "aws-amplify";
import { Auth } from "aws-amplify";
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
    Avatar,
    Modal,
    Card,
    CardContent,
} from "@mui/material";
import { render } from "@testing-library/react";
import { blue } from "@mui/material/colors";

function Profile() {
    const [fileData, setFileData] = useState<File>();
    const [fileStatus, setFileStatus] = useState(false);
    const [alert, setAlert] = useState(false);
    const [badAlert, setBadAlert] = useState(false);
    const [profileLink, setProfileLink] = useState("");
    var [open, setOpen] = useState(false);
    var [firstName, setFirstName] = useState("Drew");
    var [lastName, setLastName] = useState("Labrie");
    var [email, setEmail] = useState("labried2@wit.edu");
    var [number, setNumber] = useState("(123)456-7891");
    

    async function loadProfilePicture() {
        const profilePicture = await Storage.get("profile.jpg", {
            download: false,
            level: "private"
        });
        setProfileLink(profilePicture);
        

    };

    loadProfilePicture();

    const uploadProfile = async () => {
        try {
            if (fileData === undefined) {
                throw ("Bad file.");
            }
            console.log(fileData!.name);
            const result = await Storage.put("profile.jpg", fileData, {
                contentType: fileData?.type,
                level: "private",
            });
            setFileStatus(true);
            setAlert(true);
            console.log(21, result);
            setFileData(undefined);
        } catch (error) {
            setBadAlert(true);
        }
    };

    const uploadCertification = async () => {
        try {
            if (fileData === undefined) {
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
        setFileData(undefined);
    } catch(error) {
        setBadAlert(true);
    }
  };

    const uploadResume = async () => {
        try {
            if (fileData === undefined) {
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
            setFileData(undefined);
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

    const editInformation = async () => {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
            given_name: firstName,
            family_name: lastName,
            email: email,
            phone_number: number

        });
    };

  return (
    <>
            <Container component="main">
                <CssBaseline />
                <Box sx={{
                    marginTop: 16,
                    display: "flex",
                    flexDirection: "column",
              }}>

                  <div>
                      <Avatar src={profileLink} sx={{ width: 400, height: 400, float: "left" }} />
                      <Card sx={{
                          bgcolor: "#EFEFEF",
                          height: 400,
                          width: 400,
                          borderRadius: 4,
                          float: "right",
                      }}>
                          <CardContent sx={{
                              bgcolor: ""
                          }}>
                              <Typography variant="h4" sx={{textAlign: "center"} }>{firstName} {lastName} </Typography>
                              <Typography variant="h5"> Info </Typography>
                              <Divider sx={{marginBotton: 2} }/>
                              <Typography variant="subtitle1" sx={{marginTop: 1} }>Email: {email} </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Phone Number: {number} </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Occupation: Paramedic </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Certified Since: 2016 </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Years Certified: 6 </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Next Certification Exam: April 2023 </Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>City: Boston</Typography>
                              <Typography variant="subtitle1" sx={{ marginTop: 1 }}>Interested In: ER Tech, AEMT Opportunities </Typography>
                          </CardContent>
                      </Card>
                  </div>

                  <div>
                      <Button onClick={() => setOpen(true)} variant="contained" sx={{ marginTop: 2 }}component="label">Edit Profile </Button>
                      <Modal
                          open={open}
                          onClose={() => setOpen(false)}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                      >
                          <Box component="form" onSubmit={editInformation} sx={{
                              position: 'absolute' as 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: 600,
                              bgcolor: 'background.paper',
                              border: '2px solid #000',
                              boxShadow: 24,
                              p: 4,
                                }}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                  Edit Account Information
                              </Typography>
                              <div>
                                  <TextField sx={{
                                      marginTop: 5,
                                      marginBottom: 3,
                                      marginRight: 2}}
                                      name="First Name"
                                      label="First Name"
                                      type="First Name"
                                      id="First Name"
                                      onChange={(e) => setFirstName(e.target.value)}> </TextField>
                                  <TextField sx={{
                                      marginTop: 5,
                                      marginBottom: 3}}
                                  name="Last Name"
                                  label="Last Name"
                                  type="Last Name"
                                      id="Last Name"
                                  onChange={(e) => setLastName(e.target.value)}> </TextField>
                              </div>

                              <div>
                                  <TextField sx={{marginRight: 2} }
                                      name="Email"
                                      label="Email"
                                      type="Email"
                                      id="Email"
                                      onChange={(e) => setEmail(e.target.value)}> </TextField>

                                  <TextField
                                      name="Phone Number"
                                      label="Phone Number"
                                      type="Phone Number"
                                      id="Phone Number"
                                      onChange={(e) => setNumber(e.target.value)}> </TextField>
                              </div>

                              <Button type="submit" variant="contained" sx={{
                                  marginTop: 3,
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "left",
                              }} > Submit New Account Information</Button>

                          </Box>
                      </Modal>
                  </div>
                </Box>

            <Box
                    sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                    }}
                >    
    <div>
        <Divider sx={{margin:5}} />
           <div>
             <Button variant="contained" sx={{ marginBottom:1 }} component="label">Upload File
             <input type="file" hidden onChange={(e) => setFileData(e.target.files![0])} />
             </Button>
           <div >{fileData?.name}</div>
        </div>
        <div>
            <Button onClick={uploadResume}>Upload Resume</Button>
                        
            <Button onClick={uploadCertification}>Upload Certification</Button>

            <Button onClick={ uploadProfile } > Upload Profile Picture</Button>
        </div>
        <Divider sx={{margin:5}} />
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
