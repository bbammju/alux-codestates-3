import { ReactChannelIO } from "react-channel-plugin";
import { CHANNEL_ID_PLUGIN_KEY } from "../config";

const ChannelTalk = () => {
	return (
		<ReactChannelIO pluginKey={CHANNEL_ID_PLUGIN_KEY} language="en" autoBoot />
	);
};

export default ChannelTalk;
