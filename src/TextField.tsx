import React ,{useState,useRef} from "react";


interface Person {
    firstName:string;
    lastName:string;
}


interface Props {
    text: string;
    ok?:boolean;
    i?:number;
    fn?:(bob:string)=>number;
    person?:Person;
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=> void;
}

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({text,handleChange}) => {
    const [count,setCount] = useState<TextNode>();
    const input = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    // setCount()
	return <div ref={divRef}>
        <input type="text" ref={input} onChange={handleChange}/>
        <h1>{text}</h1>
    </div>;
};

export default TextField;
