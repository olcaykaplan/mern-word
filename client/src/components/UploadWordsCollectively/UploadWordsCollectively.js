import React, {useState} from "react";
import * as XLSX from 'xlsx';
import {Container, Form, Table, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {uploadWordsCollectively} from '../../actions/wordsAction';

const UploadWordsCollectively = () =>  {
    const [selectedFile, setSelectedFile] = useState('');
    const [uploadWords, setUploadWords] = useState([]);
    const [headers, setHeader] = useState([]);
    const dispatch = useDispatch();

    const readExcel = (e) => {


      //  console.log("files 0",e.target.files[0]);
       // console.log("result",e.target.result);
       // const file = e.target.files[0];
        const file =  {...selectedFile.name};
        console.log(file);
      /* const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) =>{
                console.log("result in fnc ",e.target.result);
                const bufferArray = e.target.result;
                const  workbook = XLSX.read(bufferArray, {type:'buffer'});
                const worksheetName= workbook.SheetNames[0];
                const workseet = workbook.Sheets[worksheetName];
                const  data = XLSX.utils.sheet_to_json(workseet);
                resolve(data);
            };
            fileReader.onerror = (err) => {
                reject(err);
            }
        });

        setSelectedFile(null);

        promise.then((items) => {

           // dispatch(uploadWordsCollectively(items));
             const aryHeader = [];
              Object.getOwnPropertyNames(items[0]).map((x, index) => {
                  if (index === 0) return
                  aryHeader.push(x);
              })
              setHeader(aryHeader);
              setUploadWords(items);
        });*/
    }

    return (
        <Container>
            <p className="mt-5 mb-3">Choose The Uploading File (name, description, examples) </p>
                <Form.File
                    id="custom-file"
                    label="Custom file input"
                    className={"mb-5"}
                    custom
                    onChange={(e) => setSelectedFile({name: e.target.files[0]}) }
                />
                <Button type={"submit"} onClick={readExcel} >Upload</Button>
            {/* Example FILE HERE*/}
            <Table striped bordered hover>
                <thead>
                    <th>Uploading Fields</th>
                    <th>Fields</th>
                    <th>Matches</th>
                </thead>
                <tbody>
                    {headers.map(h => (
                      <tr>
                          <td>{h}</td>
                          <td><select className="form-control" id="exampleFormControlSelect1">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                          </select></td>
                          <td></td>
                      </tr>
                    ))}
                </tbody>
            </Table>
            {/* HEADERS ARE MATCHED OR NOT (FORM)
              <h2>YOUR UPLOAD FILE</h2>
              <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    {headers.map(header => (
                        <th> {header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {uploadWords.map((word, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{word.deneme}</td>
                        <td>{word.ad}</td>
                        <td>{word.soyad}</td>
                    </tr>
                ))}
              </tbody>
            </Table> */}
        </Container>

    )
}

export default UploadWordsCollectively;