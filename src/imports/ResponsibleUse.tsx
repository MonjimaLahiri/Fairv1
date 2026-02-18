import svgPaths from "./svg-cap1xvp65k";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch() {
  return (
    <div className="absolute bg-[#34c759] content-stretch flex items-center justify-between left-[1379px] overflow-clip p-[2px] rounded-[100px] top-[683px] w-[64px]" data-name="Toggle - Switch">
      <Frame />
      <Knob />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[511px] top-[675px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic leading-[17px] left-[511px] text-[#454545] text-[14px] top-[701px] tracking-[0.15px] w-[621px] whitespace-pre-wrap">Customize how proactively AI flags for bias, sensitive data and diverse perspective</p>
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[511px] text-[#454545] text-[18px] top-[675px] tracking-[0.15px]">Flag potential bias in response</p>
      <ToggleSwitch />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[10px] left-[41px] top-[9px] w-[21px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10">
        <g id="Frame">
          <circle cx="10.5" cy="5" id="AX Label" r="4.5" stroke="var(--stroke-0, #B3B3B3)" />
        </g>
      </svg>
    </div>
  );
}

function Knob1() {
  return <div className="absolute bg-white bottom-[7.14%] left-[2px] rounded-[100px] top-[7.14%] w-[39px]" data-name="Knob" />;
}

function ToggleSwitch1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(60,60,67,0.3)] h-[28px] left-[1379px] overflow-clip rounded-[100px] top-[calc(50%+215.5px)] w-[64px]" data-name="Toggle - Switch">
      <Frame1 />
      <Knob1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[511px] top-[741px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic leading-[17px] left-[511px] text-[#454545] text-[14px] top-[767px] tracking-[0.15px] w-[639px] whitespace-pre-wrap">The AI will offer alternative perspectives or counter arguments for controversial/complex topics</p>
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[511px] text-[#454545] text-[18px] top-[741px] tracking-[0.15px]">Suggest alternative viewpoints</p>
      <ToggleSwitch1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob2() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#34c759] content-stretch flex items-center justify-between left-[1379px] overflow-clip p-[2px] rounded-[100px] top-[calc(50%+281.5px)] w-[64px]" data-name="Toggle - Switch">
      <Frame2 />
      <Knob2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[511px] top-[807px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic leading-[17px] left-[511px] text-[#454545] text-[14px] top-[833px] tracking-[0.15px] w-[648px] whitespace-pre-wrap">Receive explicit confirmation when using highly sensitive data (eg., health, financial) in a response</p>
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[511px] text-[#454545] text-[18px] top-[807px] tracking-[0.15px]">Confirm sensitive data usage</p>
      <ToggleSwitch2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[507px] text-[#454545] top-[587px] tracking-[0.15px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic leading-[17px] left-[507px] text-[16px] top-[616px] w-[621px] whitespace-pre-wrap">Customize how proactively AI flags for bias, sensitive data and diverse perspective</p>
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[507px] text-[24px] top-[587px]">AI Ethical Behavior Controls</p>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents left-[486px] top-[565px]" data-name="box 3">
      <div className="absolute bg-white h-[324px] left-[486px] rounded-[5px] shadow-[0px_83px_23px_0px_rgba(200,200,200,0),0px_53px_21px_0px_rgba(200,200,200,0.01),0px_30px_18px_0px_rgba(200,200,200,0.05),0px_13px_13px_0px_rgba(200,200,200,0.09),0px_3px_7px_0px_rgba(200,200,200,0.1)] top-[565px] w-[992px]" />
      <Group5 />
      <Group6 />
      <Group7 />
      <Group4 />
      <div className="absolute h-0 left-[505px] top-[653px] w-[938.001px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 938.001 1">
            <line id="Line 14" stroke="var(--stroke-0, #696372)" x2="938.001" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[507px] text-[#454545] top-[253px] tracking-[0.15px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal h-[49px] italic leading-[17px] left-[507px] text-[16px] top-[287px] w-[658px] whitespace-pre-wrap">Receive warnings and reminders to verify information with external sources when discussing high risk topic</p>
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[507px] text-[24px] top-[253px]">Enable Critical Alerts for Sensitive Topics</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob3() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch3() {
  return (
    <div className="absolute bg-[#34c759] content-stretch flex items-center justify-between left-[1379px] overflow-clip p-[2px] rounded-[100px] top-[259px] w-[64px]" data-name="Toggle - Switch">
      <Frame3 />
      <Knob3 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[506px] top-[342px]">
      <div className="absolute bg-[rgba(242,242,242,0.5)] h-[142px] left-[506px] rounded-[10px] top-[342px] w-[937px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[536px] text-[#454545] text-[20px] top-[394px] tracking-[0.15px]">AI Detected Alert Topics show up here</p>
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents left-[486px] top-[231px]" data-name="box 4">
      <div className="absolute bg-white h-[282px] left-[486px] rounded-[5px] shadow-[0px_83px_23px_0px_rgba(200,200,200,0),0px_53px_21px_0px_rgba(200,200,200,0.01),0px_30px_18px_0px_rgba(200,200,200,0.05),0px_13px_13px_0px_rgba(200,200,200,0.09),0px_3px_7px_0px_rgba(200,200,200,0.1)] top-[231px] w-[992px]" />
      <Group8 />
      <ToggleSwitch3 />
      <Group3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p23bcfd80} fill="var(--fill-0, black)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0 size-[56px]" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bg-[#fffffb] left-[23px] rounded-[28px] size-[56px] top-[22px]" data-name="FAB">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#35323a] border-solid inset-0 pointer-events-none rounded-[28px]" />
    </div>
  );
}

function MdiAccountOutline() {
  return (
    <div className="-translate-y-1/2 absolute left-[44px] size-[42px] top-[calc(50%+285.5px)]" data-name="mdi:account-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="mdi:account-outline">
          <path d={svgPaths.p5e39d00} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function ButtnAccount() {
  return (
    <div className="absolute contents left-[26px] top-[803px]" data-name="buttn account">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[803px] w-[355px]" />
      <MdiAccountOutline />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[103px] text-[20px] text-black top-[calc(50%+273.5px)] tracking-[0.15px]">Account</p>
    </div>
  );
}

function PajamasNotifications() {
  return (
    <div className="-translate-y-1/2 absolute left-[45px] size-[40px] top-[calc(50%+181.5px)]" data-name="pajamas:notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="pajamas:notifications">
          <path d={svgPaths.p1d5be200} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.1" />
        </g>
      </svg>
    </div>
  );
}

function ButtnNoti() {
  return (
    <div className="absolute contents left-[26px] top-[699px]" data-name="buttn noti">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[699px] w-[355px]" />
      <PajamasNotifications />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[103px] text-[20px] text-black top-[calc(50%+169.5px)] tracking-[0.15px]">Notifications</p>
    </div>
  );
}

function AntDesignSafetyOutlined() {
  return (
    <div className="-translate-y-1/2 absolute left-[45px] size-[40px] top-[calc(50%+77.5px)]" data-name="ant-design:safety-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="ant-design:safety-outlined">
          <path d={svgPaths.pc26a3c0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeWidth="0.6" />
          <path d={svgPaths.p3e172b80} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #6155F5)" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}

function ButtnResponsible() {
  return (
    <div className="absolute contents left-[26px] top-[595px]" data-name="buttn responsible">
      <div className="absolute bg-[#6155f5] h-[61px] left-[26px] rounded-[31px] top-[595px] w-[355px]" />
      <AntDesignSafetyOutlined />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[103px] text-[20px] text-white top-[calc(50%+65.5px)] tracking-[0.15px]">Responsible Use</p>
    </div>
  );
}

function OcticonGoal() {
  return (
    <div className="-translate-y-1/2 absolute left-[45px] size-[40px] top-[calc(50%-26.5px)]" data-name="octicon:goal-24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="octicon:goal-24">
          <path d={svgPaths.p17d7d500} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="0.5" />
          <path d={svgPaths.p451bbb0} fill="var(--fill-0, #1E1E1E)" id="Vector_2" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="0.5" />
          <path d={svgPaths.p208c1f80} fill="var(--fill-0, #1E1E1E)" id="Vector_3" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtnGoal() {
  return (
    <div className="absolute contents left-[26px] top-[491px]" data-name="buttn goal">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[491px] w-[355px]" />
      <OcticonGoal />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] left-[103px] text-[20px] text-black top-[calc(50%-38.5px)] tracking-[0.15px]">
        <span className="leading-[24px]">{`Goal alignment `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] leading-[24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`&`}</span>
        <span className="leading-[24px]">{` Clarity`}</span>
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4.17%_4.34%_4.34%_4.17%]" data-name="Group">
      <div className="absolute inset-[-2.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0963 38.0963">
          <g id="Group">
            <path d={svgPaths.pfd3580} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeWidth="1.5" />
            <path d={svgPaths.p29c8ac00} id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p25a7fb60} id="Vector_3" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlinePlumpAiGeneratePortraitImageSpark() {
  return (
    <div className="-translate-y-1/2 absolute left-[45px] overflow-clip size-[40px] top-[calc(50%-127.5px)]" data-name="streamline-plump:ai-generate-portrait-image-spark">
      <Group />
    </div>
  );
}

function ButtnIdentity() {
  return (
    <div className="absolute contents left-[26px] top-[387px]" data-name="buttn identity">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[387px] w-[355px]" />
      <StreamlinePlumpAiGeneratePortraitImageSpark />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] left-[103px] text-[20px] text-black top-[calc(50%-142.5px)] tracking-[0.15px]">
        <span className="leading-[24px]">{`Your Identity `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] leading-[24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`&`}</span>
        <span className="leading-[24px]">{` Values`}</span>
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.25%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.5 34.8334">
          <g id="Group">
            <path d={svgPaths.p29512ea0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
            <path d={svgPaths.p20fd70f1} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p333aa780} id="Vector_3" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HugeiconsAiInnovation() {
  return (
    <div className="absolute left-[45px] overflow-clip size-[40px] top-[294px]" data-name="hugeicons:ai-innovation-01">
      <Group1 />
    </div>
  );
}

function ButtnAutonomy() {
  return (
    <div className="absolute contents left-[26px] top-[283px]" data-name="buttn autonomy">
      <div className="absolute h-[61px] left-[26px] rounded-[31px] top-[283px] w-[355px]" />
      <HugeiconsAiInnovation />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] left-[103px] text-[20px] text-black top-[calc(50%-246.5px)] tracking-[0.15px]">
        <span className="leading-[24px]">AI Autonomy</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] leading-[24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`&`}</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="leading-[24px]">Interaction</span>
      </p>
    </div>
  );
}

function CarbonSettings() {
  return (
    <div className="absolute left-[45px] size-[40px] top-[189px]" data-name="carbon:settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="carbon:settings">
          <path d={svgPaths.p26355f80} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
          <path d={svgPaths.p2a58200} fill="var(--fill-0, #1E1E1E)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtnGeneral() {
  return (
    <div className="absolute contents left-[26px] top-[179px]" data-name="buttn general">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[179px] w-[355px]" />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[103px] text-[20px] text-black top-[calc(50%-350.5px)] tracking-[0.15px]">General</p>
      <CarbonSettings />
    </div>
  );
}

function NavPanel() {
  return (
    <div className="absolute h-[1095px] left-0 top-0 w-[414px]" data-name="nav panel">
      <div className="absolute bg-[#f5f7fa] bottom-0 h-[1095px] left-0 w-[414px]" />
      <Fab />
      <ButtnAccount />
      <ButtnNoti />
      <ButtnResponsible />
      <ButtnGoal />
      <ButtnIdentity />
      <ButtnAutonomy />
      <ButtnGeneral />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Albert_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Save Changes</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#3221ff] content-stretch flex flex-col h-[47.273px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[195px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function SaveBtn() {
  return (
    <div className="absolute content-stretch flex h-[55.782px] items-center justify-center left-[1286.25px] top-[980.22px] w-[191.75px]" data-name="save btn">
      <Content />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Albert_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[20px] tracking-[0.1px] whitespace-nowrap">
        <p className="leading-[20px]">Discard Changes</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[47.273px] relative rounded-[100px] shrink-0 w-[195px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <StateLayer2 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function DiscardBtn() {
  return (
    <div className="absolute content-stretch flex h-[55.782px] items-center justify-center left-[1073px] top-[980px] w-[191.75px]" data-name="discard btn">
      <Content1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1073px] top-[980px]">
      <SaveBtn />
      <DiscardBtn />
    </div>
  );
}

export default function ResponsibleUse() {
  return (
    <div className="bg-[#fffffb] overflow-clip relative rounded-[24px] size-full" data-name="Responsible Use">
      <Box />
      <Box1 />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[486px] text-[34px] text-black top-[66px] tracking-[0.15px]">Responsible Use</p>
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[486px] text-[#454545] text-[20px] top-[122px] tracking-[0.15px]">Set boundaries for sensitive topics and review AI’s ethical choices and alerts</p>
      <NavPanel />
      <Group2 />
    </div>
  );
}