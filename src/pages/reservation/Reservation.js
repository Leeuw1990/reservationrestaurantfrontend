import React, { useState } from 'react';
import styles from './Reservation.module.css';
import { Controller ,useForm } from 'react-hook-form';
import Input from "../../components/Input/Input";
import ReservationService from "../../services/ReservationService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation() {
    const [successMessage, toggleSuccessMessage] = useState(false);

    const { control, register, handleSubmit, formState:{errors} } = useForm({
        mode: "onChange"
    })

    async function submitReservation (data, clear) {
        try {
            const response = await ReservationService.createReservation(JSON.parse(JSON.stringify(data)));
            console.log("Reservation info",response)
            clear.target.reset();
            setTimeout(() => {toggleSuccessMessage(true)}, 2000)
        } catch (e) {
            console.error(e)
        }
        toggleSuccessMessage(false);
    }

    return(
        <div className={styles.booking}>
            <form className={styles.inputForm} onSubmit={handleSubmit(submitReservation)}>
                <Controller control={control}  name="date" render={({field}) => (
                <DatePicker
                    name="date"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    valueName="date"
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    placeholderText="Select a date after 5 days ago"
                    inline
                />
                )}
                />
                <label id="time">Tijd</label>
                <select name="time" id="time" {...register("time")}>
                    <option value="12:00">12:00</option>
                    <option value="12:15">12:15</option>
                    <option value="12:30">12:30</option>
                    <option value="12:45">12:45</option>
                    <option value="13:00">13:00</option>
                    <option value="13:15">13:15</option>
                    <option value="13:30">13:30</option>
                    <option value="13:45">13:45</option>
                    <option value="14:00">14:00</option>
                    <option value="14:15">14:15</option>
                    <option value="14:30">14:30</option>
                    <option value="14:45">14:45</option>
                    <option value="15:00">15:00</option>
                </select>
                <label id="numberOfPerson">Personen</label>
                <select name="numberOfPerson" id="numberOfPerson" {...register("numberOfPerson")}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
                <Input
                    type='text'
                    name='name'
                    placeholder='Naam'
                    fieldRef={register('name',
                        {
                            required: {
                                value: true,
                                message: 'Naam verplicht',}})}
                    errors={errors}
                />
                <Input
                    type='text'
                    name='email'
                    placeholder='E-mail'
                    fieldRef={register('email',
                        {
                            required: {
                                value: true,
                                message: 'E-mail verplicht',}})}
                    errors={errors}
                />
                <Input
                    type='number'
                    name='phoneNumber'
                    placeholder='Telefoonnummer'
                    fieldRef={register('phoneNumber',
                        {
                            required: {
                                value: true,
                                message: 'Telefoonnummer verplicht',}})}
                    errors={errors}
                />
                <label>
                    <textarea {...register('comment')} id='comment' name='comment' className={styles.ereaText} rows='10' cols='50' placeholder='Opmerkingen'/>
                </label>
                <button className={styles.submit} type='submit'
                >Verstuur</button>
                {successMessage === true && (<p>Reserving is geluk!</p>)}
            </form>
        </div>
    );
}

export default Reservation;