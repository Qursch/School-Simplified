import { IconType } from "react-icons";
import { FaDiscord, FaQuestionCircle, FaRegHandshake } from "react-icons/fa";
import { HiOutlineMail, HiUserGroup } from "react-icons/hi";
import { MdWebAsset } from "react-icons/md";

const iconCache: Record<string, IconType> = {
	MdWebAsset: MdWebAsset,
	FaDiscord: FaDiscord,
	HiUserGroup: HiUserGroup,
	HiOutlineMail: HiOutlineMail,
	FaRegHandshake: FaRegHandshake,
};

export default function fetchIcon(iconName: string): IconType {
	// check cache
	if (iconCache[iconName]) return iconCache[iconName];

	// cache miss
	// suck it

	// default case
	iconCache[iconName] = FaQuestionCircle;
	return FaQuestionCircle;
}
