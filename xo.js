const table = [];
const player = [];
const com = [];

document.querySelectorAll('.a').forEach(cell => cell.addEventListener('click',roundX));
function roundX(clickedCellEvent){
    const clickCell = clickedCellEvent.target;
    var id = clickCell.getAttribute('id');
    if(table.includes(id)){
        return false;
    }
    else{
        clickCell.src = "https://banner2.cleanpng.com/20180423/rye/kisspng-tic-tac-toe-computer-icons-clip-art-5add84df649c12.1755804215244669114121.jpg";
        table.push(id);
        player.push(id);
    }
    roundO();
    function roundO(){
        while(true)
        {
            var item = Math.floor(Math.random()*9 + 1);
            const random = document.getElementById(item);
            var id = random.getAttribute('id')
            if(table.length===9){
                break;
            }
            else if(table.includes(id)){
                continue;
            }
            else{
                random.src="https://png2.cleanpng.com/sh/9fc7fdfd654280501f0de19ca6bd3f75/L0KzQYm3VMA0N5N4fZH0aYP2gLBuTgRzaZdrgdU2c3nqfn76hfdvaZ1qRdZyLXTsgrr7lP8ubJoyiORuY3XndbBDgb10gZ5nRdV4bobogsTolPlwdl46edU9MUO3QIG3V8BlQV88T6IBMkC0QYK8UsI4QWo5SqY5MEG7PsH1h5==/kisspng-traffic-sign-segnale-di-diritto-di-precedenza-symb-conversation-5ac413400070d9.7706201115227994240018.png"
                com.push(id);
                table.push(id);
                break;
            }    
        }
    }
}