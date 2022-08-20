import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { memberService } from '../services/member.service';
import { Member } from '../types/members';

export function GridComponent() {
    const MINUTE_MS = 120000;

    useEffect(() => {
        getMebers();
    }, []);

    useEffect(() => {
        getMebers();
        const interval = setInterval(() => { 
            getMebers();
        }, MINUTE_MS);    
        return () => clearInterval(interval);
    }, []);

    const [members, setMembers] = useState<Member[]>([]);
    const getMebers = async () => {
        const response = await memberService.getMembers();
        setMembers(response);
    }

    const columns = [
        "First Name",
        "Last Name",
        "Address",
        "SSN"
    ]

    return (
    <>
        <Link to={`/`} className="btn"><i className="fa-solid fa-circle-arrow-left fs-3 text-dark"></i></Link>
        <div className='row justify-content-center'>
            <div className="title-header-home text-center">Members Form</div>
            <div className='col-md-9 mt-4 d-flex text-center justify-content-center'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        { columns.map((columns, i) => { return <th key={i}>{columns}</th> }) }
                    </tr>
                </thead>
                <tbody>
                    {
                        members.map((member, i) => { 
                            return <>
                                <tr key={i}>
                                    <th>{member.firstName}</th>
                                    <th>{member.lastName}</th>
                                    <th>{member.address}</th>
                                    <th>{member.ssn}</th>
                                </tr>
                            </> 
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    </>
    );
}

export default GridComponent