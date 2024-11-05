import { observer } from 'mobx-react-lite'
const WorkHeader = () =>{

    return(
        <div className="work-shop-header m-0 bg-[#414143] w-full p-[5px] flex flex-row justify-center">
           <div className="logo-container ">
                <h1 className="logo-text font-medium">SpecInterns Workshop</h1>
            </div>
        </div>
    )
}

export default observer(WorkHeader);