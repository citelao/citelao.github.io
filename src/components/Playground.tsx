import { createRef, useState } from "react";
import "./Playground.scss";

type Props = {
    html: string;
};
export default function Playground({ html }: Props) {
    const initialRows = html.split("\n").length;
    const [currentHtml, setCurrentHtml] = useState(html);

    const htmlText = createRef<HTMLTextAreaElement>();

    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentHtml(e.target.value);

        // TODO: don't change this if folks manually resize.
        // e.target.style.height = e.target.scrollHeight + 'px';
    };

    return (
        <figure>
            <div className="label" id="exampleLabel">Example</div>
            {/* TODO: IFrame */}
            <div className="output" dangerouslySetInnerHTML={{__html: currentHtml}} />

            <div className="label" id="htmlLabel">HTML</div>
            <textarea ref={htmlText} rows={initialRows} onChange={handleHtmlChange}>
                {currentHtml}
            </textarea>
        </figure>
    );
}