import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';


function ProjectSchedule({ name = "", projectId = "", datePractised = "" }) {
    const [schedule, setSchedule] = useState([]);
    const [days, setDays] = useState(7);

    useEffect(() => {
        axios
            .get(`https://zlld6v728l.execute-api.eu-west-2.amazonaws.com/dev/skills/schedule/${projectId}/${datePractised}?endDate=${moment().add(days-1,"days")}`)
            .then((response) => {
                setSchedule(response.data.schedule);
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    }, [projectId, days, datePractised]);

    return (
        <>
            <Form
            onSubmit = {e => e.preventDefault()}>
                <Form.Row>
                        <Form.Label>Choose number of days to show the predicted schedule for.</Form.Label>
                        <Form.Control
                            type="number"
                            value={days}
                            onChange={e=>setDays(e.target.value)}
                        />
                </Form.Row>
            </Form>
            <Table bordered size="sm" responsive>
                <thead>
                    <tr>
                        <th colSpan="2">{name}</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map(({ date, skill }) => (
                        <tr key={date}>
                            <td>{moment(date).format("DD MMM YYYY")}</td>
                            <td>{skill}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ProjectSchedule;
