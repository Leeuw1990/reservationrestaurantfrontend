import React, { useEffect, useState } from "react";
import styles from "./ReservationList.module.css"
import ReservationService from "../../services/ReservationService";

function ReservationList() {
    const [data, setData] = useState([]);

    useEffect(() => {
    async function fetchList() {

        try {
            const response = await ReservationService.getReservation();
            console.log("Reservation list: ",response)
            setData(response.data)

        } catch (e) {
            console.error(e)
        }

    }
    fetchList()
    },[])

    return(
        <div>
            {data.length > 0 && data.map((reservations, index) => {
                return (
                    <div key={index} className={styles.list}>
                        {reservations.date && (<p>Datum: {reservations.date.slice(0, 10)}</p>)}
                        {reservations.time && (<p>Tijd: {reservations.time}</p>)}
                        {reservations.numberOfPerson && (<p>Personen: {reservations.numberOfPerson}</p>)}
                        {reservations.name && (<p>Naam: {reservations.name}</p>)}
                        {reservations.email && (<p>E-mail: {reservations.email}</p>)}
                        {reservations.phoneNumber && (<p>Telefoon: {reservations.phoneNumber}</p>)}
                        {reservations.comment && (<p>Opmerkingen: {reservations.comment}</p>)}
                        </div>
                );
                    })}
            </div>
    );

}

export default ReservationList;