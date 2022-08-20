import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { memberService } from "../services/member.service";
import { Member } from "../types/members";

export function FormComponent() {
    const navigate = useNavigate();
    const validFormat = new RegExp(/^[0-9]{3}[-][0-9]{2}[-][0-9]{4}$/);
    const [isValidFirstName, setisValidFirstName] = useState<boolean>(false);
    const [isValidLastName, setisValidLastName] = useState<boolean>(false);
    const [isValidAddress, setisValidAddress] = useState<boolean>(false);
    const [isValidFormat, setisValidFormat] = useState<boolean>(false);

    const [member, setForm] = useState<Member>({    
        firstName: "",
        lastName: "",
        address: "",
        ssn: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate('/members');
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let inputValue = event.target.value;

        if(event.target.name === 'firstName'){
            if(inputValue === "" || inputValue.length <= 1){
                setisValidFirstName(false);
            }
            else{
                inputValue = inputValue.trim();
                setisValidFirstName(true);
            }
        }

        if(event.target.name === 'lastName'){
            if(inputValue === "" || inputValue.length <= 1){
                setisValidLastName(false);
            }
            else{
                inputValue = inputValue.trim();
                setisValidLastName(true);
            }
        }

        if(event.target.name === 'address'){
            if(inputValue === "" || inputValue.length <= 1){
                setisValidAddress(false);
            }
            else{
                inputValue = inputValue.trim();
                setisValidAddress(true);
            }
        }

        if(event.target.name === 'ssn' && inputValue !== "" && !validFormat.test(inputValue))
            setisValidFormat(false);
        else
            setisValidFormat(true);

        setForm({
            ...member,
            [event.target.name]:inputValue
        });
    } 

    const handlerSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        memberService.addMember(member);
        handlerReset();
    }

    const handlerReset = () => {
        setForm({
            firstName: "",
            lastName: "",
            address: "",
            ssn: ""
        });
    }

    const isFormValidate = () => {
        if(!isValidFirstName || !isValidLastName || !isValidAddress || !isValidFormat)
            return true;
        else
            return false;
    }

    return <>
        <div className="container">
            <div className="title-header-home text-center">Members Form</div>
            <form typeof="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group row mt-4">
                    <div className="form-group-row">
                        <input type="text" value={member.firstName} onChange={inputHandler} name="firstName" className="form-control" placeholder="First Name"/>
                        { !isValidFirstName ? <div className="text-danger">The first Name is required and most be greater than 1 character.</div> : null }
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="form-group-row">
                        <input type="text" value={member.lastName} onChange={inputHandler} name="lastName" className="form-control" placeholder="Last Name"/>
                        { !isValidLastName ? <div className="text-danger">The last Name is required and most be greater than 1 character.</div> : null }
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="form-group-row">
                        <input type="text" value={member.address} onChange={inputHandler} name="address" className="form-control" placeholder="Address"/>
                        { !isValidAddress ? <div className="text-danger">The address is required and most be greater than 1 character.</div> : null }
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="form-group-row">
                        <input type="text" value={member.ssn} onChange={inputHandler} name="ssn" className="form-control" placeholder="SSN"/>
                        { !isValidFormat ? <div className="text-danger">The required format is: 321-44-1235</div> : null }
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger memberBtn" onClick={() => handlerReset()}>Reset</button>
                        <button type="submit" className="btn btn-primary memberBtn" onClick={(e) => handlerSubmit(e)} disabled={isFormValidate()}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}

export default FormComponent;