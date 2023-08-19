
export interface Button {
    text: string;
    callback: () => void;
}
export interface TextControlProps {
    text: string;
    onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    buttons: Button[];
  

}