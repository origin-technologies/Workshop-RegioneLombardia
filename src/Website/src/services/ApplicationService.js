class ApplicationService {    
    apply(idNotice, name, surname, email, phone){
        return fetch(process.env.REACT_APP_API_BASEURL + "/application/apply",{ 
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
                idNotice: parseInt(idNotice),
                name: name,
                surname: surname,
                email: email,
                phone: phone
            })
        })
        // .then(res => res.json());        
    }
}
export default new ApplicationService();