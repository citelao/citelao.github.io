import { default as Pg } from "@agney/playground";
/* Why is there a tabs import? https://github.com/agneym/playground#why-is-there-a-reacttabs-import*/
import "@reach/tabs/styles.css";

type PlaygroundProps = {
    html: string;
};
export default function Playground({ html }: PlaygroundProps) {
    return (
        <Pg initialSnippet={{ html }} mode={"light"} />
    );
}