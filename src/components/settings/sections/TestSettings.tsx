import { MdMode } from "react-icons/md";
import SettingRow from "../components/SettingRow";
import SettingCapsule from "../components/SettingCapsule";
import { IoMdTime } from "react-icons/io";
import { BsAlphabet } from "react-icons/bs";
import { ClipboardType, Shapes } from "lucide-react";
import { RotateCcw } from "lucide-react";
import SettingButton from "../components/SettingButton";

export default function TestSettings() {
  return (
    <section>
      <div className="mb-5">
        <h2 className="font-[Courier_Prime] text-3xl font-semibold text-[#49372a]">
          Test
        </h2>
      </div>

      <div className="divide-y divide-[#b89e91]">
        {/* default mode setting */}
        <SettingRow
          icon={<MdMode size={22} />}
          title="Default mode"
          description="Choose which mode you want to type in."
        >
          <SettingCapsule options={["Time", "Words"]} value="Time" />
        </SettingRow>

        {/* time mode setting */}
        <SettingRow
          icon={<IoMdTime size={22} />}
          title="Time mode"
          description="Choose the timer according to your preference."
        >
          <SettingCapsule options={["15", "30", "60"]} value="30" />
        </SettingRow>

        {/* words mode setting */}
        <SettingRow
          icon={<BsAlphabet size={24} />}
          title="Words mode"
          description="Choose the number of words for your test."
        >
          <SettingCapsule options={["15", "30", "50"]} value="30" />
        </SettingRow>

        {/* test type settting */}
        <SettingRow
          icon={<ClipboardType size={20} />}
          title="Test type"
          description="Choose the type of test you want to practice."
        >
          <SettingCapsule
            options={["Normal", "Punctuations", "Numbers"]}
            value="Normal"
          />
        </SettingRow>

        {/* test difficulty settting */}
        <SettingRow
          icon={<Shapes size={20} />}
          title="Test difficulty"
          description="Choose the difficulty level of test you,which you want to practice."
        >
          <SettingCapsule
            options={["Normal", "Intermediate", "Advanced"]}
            value="Normal"
          />
        </SettingRow>
        {/* reset test settings */}
        <SettingRow
          icon={<RotateCcw size={20} />}
          title="Set to default"
          description="Restore the original Sloth Typing test settings."
        >
          <SettingButton>Set to default</SettingButton>
        </SettingRow>
      </div>
    </section>
  );
}
