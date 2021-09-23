import http from "../http-common";

class ReservationService {

    getReservation() {
        return http.get("api/reservation/get");
    }

    updateReservation(id) {
        return http.patch(`api/reservation/update/${id}`);
    }

    createReservation(data) {
        return http.post("api/reservation/send", data);
    }

}

export default new ReservationService();