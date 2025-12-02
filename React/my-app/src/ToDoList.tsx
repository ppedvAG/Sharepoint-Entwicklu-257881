import { ReactNode } from 'react'


// Wir definieren: Diese Komponente erwartet Children (z.B: Text oder Listenelemente)
interface ToDoListProp {
    children: ReactNode;
    items: string[]; //  Ein Array aus String wird erwartet
}

export const ToDoList: React.FC<ToDoListProp> = ({children, items}) => {
    return (
        <div>
            {/* Wir nutzen die Headline Komponent zum Darstellen der Überschrift */}
            <HeadlineCompontent text = {children} />
            {/* Wir nutzen die neue Komponente DynamicList und reichen die Props weiter */}
            <DynamicList data = {items} />
        </div>
    )
}

// Die Kompente Dynamic list bekommt nur einer Liste von Strings
interface DynamicListProps {
    data: string[];
}

const DynamicList: React.FC<DynamicListProps> = ({data}) => {
    return (
        <ul>
            {/* Wir gehen mit einer Schleife durch das Array und erstellen
                    für jeden Eintrag ein Listenelement <li> */}


                {/* ["Bananen", "Zitronen", "Milch"] 
                items.map macht eine Schleife, die den code <li key= {index}>{item}</li>
                so oft ausführ bis das Ende des Arrays erreicht ist.
                Bei jedem Schleifendurchlauf wird der Text eines Items ("Bananen") in die Variable
                item gespeicht und der Index dieses Items wird in die Variable index gespeichert
                
                Dann wird der Code <li key= {index}>{item}</li> für jedes Item ausgeführt
                 -> für jedes Wort in meinem String Array wird ein Listelemt mit dem dazugehörigen Index ersetllt.*/}
            {data.map((item, index) =>  (
                <li key = {index}>{item}</li>
            ))}
        </ul>
    )
}
// HeadlineProps sind einfach nur ein Text für die Überschrift
interface HeadLineProps {
    text: ReactNode
}

// Neue Komponente nur für die Überschrift der ToDoList Komponente
const HeadlineCompontent: React.FC<HeadLineProps> = ({text}) => {
    return <h1>{text}</h1>;    
}