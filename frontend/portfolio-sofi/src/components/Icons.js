import Trash from "../assets/icons/trash.svg";
import Edit from "../assets/icons/edit.svg";
import Validate from "../assets/icons/validate.svg";

export const TrashIcon = ({ ...props }) => {
  return <img src={Trash} alt="" {...props} />;
};
export const EditIcon = ({ ...props }) => {
  return <img src={Edit} alt="" {...props} />;
};
export const ValidateIcon = ({ ...props }) => {
  return <img src={Validate} alt="" {...props} />;
};
