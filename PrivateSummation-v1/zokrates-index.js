import zokrates_hash from './zokrates-hash';
import zokrates_sender_proof from './zokrates-sender';
import zokrates_receiver_proof from './zokrates-receiver'; 

window.zokrates_hash = async function(s, r){
    return await zokrates_hash(s, r);
}

window.zokrates_sender_proof = async function(s, r, new_r, s_pair, r_pair, comm, comm_pair, new_comm){
    return await zokrates_sender_proof(s, r, new_r, s_pair, r_pair, comm, comm_pair, new_comm);
}