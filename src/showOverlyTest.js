import './show.css'
export default function PageWithOverlay({showOverlay, setShowOverlay , formInputs}) {
    function messageHandler(){
        const ageNum = Number(formInputs.age || 0);

        if((formInputs.name || "").length < 8)
        {
            return "Name must be more than 8 characters";
        } else if(ageNum < 18){
            return 'Age must be 18 or older';
        } else if((formInputs.phoneNumber || "").length !== 11){
            return 'Phone number is false';
        }
        return "Register successfully";
    }
    return (
        <div style={{ padding: 30 }}>
            {showOverlay && (
                <div
                    className="overlay"
                    onClick={() => setShowOverlay(false)}
                >
                    <div
                        className="innerPage"
                        onClick={(e) => e.stopPropagation()} // prevent closing
                    >
                        <p>{messageHandler()}</p>
                        
                    </div>
                </div>
            )}
        </div>
    );
}