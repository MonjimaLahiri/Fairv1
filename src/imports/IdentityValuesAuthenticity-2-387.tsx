import svgPaths from "./svg-9gmvlbxf1r";

function Group3() {
  return (
    <div className="absolute contents left-[507px] text-[#454545] top-[647px] tracking-[0.15px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic leading-[17px] left-[507px] text-[16px] top-[681px] w-[670px] whitespace-pre-wrap">Allow AI to self adjust its tone (eg., more supportive, more formal) based on the detected emotional context or specific task within a conversation.</p>
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[507px] text-[24px] top-[647px]">Contextual Tone Adjustment</p>
    </div>
  );
}

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
    <div className="absolute bg-[#34c759] content-stretch flex items-center justify-between left-[1379px] overflow-clip p-[2px] rounded-[100px] top-[653px] w-[64px]" data-name="Toggle - Switch">
      <Frame />
      <Knob />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents left-[486px] top-[625px]" data-name="box 2">
      <div className="absolute bg-white h-[129px] left-[486px] rounded-[5px] shadow-[0px_83px_23px_0px_rgba(200,200,200,0),0px_53px_21px_0px_rgba(200,200,200,0.01),0px_30px_18px_0px_rgba(200,200,200,0.05),0px_13px_13px_0px_rgba(200,200,200,0.09),0px_3px_7px_0px_rgba(200,200,200,0.1)] top-[625px] w-[992px]" />
      <Group3 />
      <ToggleSwitch />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents leading-[24px] left-[507px] text-[#454545] top-[253px] tracking-[0.15px]">
      <p className="absolute font-['Albert_Sans:Italic',sans-serif] font-normal italic left-[507px] text-[16px] top-[282px]">Rank or adjust the importance of key communication and interaction values</p>
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium left-[507px] text-[24px] top-[253px]">Prioritize Your Core Values</p>
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="absolute left-[828px] size-[24px] top-[352px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[624px] top-[344px]">
      <div className="absolute bg-[#f0f4ff] border border-[#6786e2] border-solid h-[41px] left-[624px] rounded-[3px] top-[344px] w-[244px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[641px] text-[#1e1e1e] text-[18px] top-[352px] tracking-[0.15px]">Warmth</p>
      <ArrowDropDown />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute contents left-[624px] top-[344px]" data-name="dropdown">
      <Group2 />
    </div>
  );
}

function Rank() {
  return (
    <div className="absolute contents left-[531px] top-[344px]" data-name="rank 1">
      <Dropdown />
      <p className="absolute font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[531px] text-[#1e1e1e] text-[18px] top-[352px] tracking-[0.15px]">{`Rank 1 : `}</p>
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="absolute left-[828px] size-[24px] top-[408px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[624px] top-[400px]">
      <div className="absolute bg-[#f0f4ff] border border-[#6786e2] border-solid h-[41px] left-[624px] rounded-[3px] top-[400px] w-[244px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[641px] text-[#1e1e1e] text-[18px] top-[408px] tracking-[0.15px]">Directness</p>
      <ArrowDropDown1 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute contents left-[624px] top-[400px]" data-name="dropdown">
      <Group5 />
    </div>
  );
}

function Rank1() {
  return (
    <div className="absolute contents left-[531px] top-[400px]" data-name="rank 2">
      <Dropdown1 />
      <p className="absolute font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[531px] text-[#1e1e1e] text-[18px] top-[408px] tracking-[0.15px]">{`Rank 2 : `}</p>
    </div>
  );
}

function ArrowDropDown2() {
  return (
    <div className="absolute left-[828px] size-[24px] top-[464px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[624px] top-[456px]">
      <div className="absolute bg-[#f0f4ff] border border-[#6786e2] border-solid h-[41px] left-[624px] rounded-[3px] top-[456px] w-[244px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[641px] text-[#1e1e1e] text-[18px] top-[464px] tracking-[0.15px]">Formality</p>
      <ArrowDropDown2 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute contents left-[624px] top-[456px]" data-name="dropdown">
      <Group6 />
    </div>
  );
}

function Rank2() {
  return (
    <div className="absolute contents left-[531px] top-[456px]" data-name="rank 3">
      <Dropdown2 />
      <p className="absolute font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[531px] text-[#1e1e1e] text-[18px] top-[464px] tracking-[0.15px]">{`Rank 3 : `}</p>
    </div>
  );
}

function ArrowDropDown3() {
  return (
    <div className="absolute left-[1240px] size-[24px] top-[352px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[1036px] top-[344px]">
      <div className="absolute bg-[#f0f4ff] border border-[#6786e2] border-solid h-[41px] left-[1036px] rounded-[3px] top-[344px] w-[244px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[1053px] text-[#1e1e1e] text-[18px] top-[352px] tracking-[0.15px]">Precision</p>
      <ArrowDropDown3 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="absolute contents left-[1036px] top-[344px]" data-name="dropdown">
      <Group7 />
    </div>
  );
}

function Rank3() {
  return (
    <div className="absolute contents left-[943px] top-[344px]" data-name="rank 4">
      <Dropdown3 />
      <p className="absolute font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[943px] text-[#1e1e1e] text-[18px] top-[352px] tracking-[0.15px]">{`Rank 4 : `}</p>
    </div>
  );
}

function ArrowDropDown4() {
  return (
    <div className="absolute left-[1240px] size-[24px] top-[408px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <path d="M12 15L7 10H17L12 15Z" fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[1036px] top-[400px]">
      <div className="absolute bg-[#f0f4ff] border border-[#6786e2] border-solid h-[41px] left-[1036px] rounded-[3px] top-[400px] w-[244px]" />
      <p className="absolute font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px] left-[1053px] text-[#1e1e1e] text-[18px] top-[408px] tracking-[0.15px]">Other (user defined)</p>
      <ArrowDropDown4 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="absolute contents left-[1036px] top-[400px]" data-name="dropdown">
      <Group8 />
    </div>
  );
}

function Rank4() {
  return (
    <div className="absolute contents left-[943px] top-[400px]" data-name="rank 5">
      <Dropdown4 />
      <p className="absolute font-['Albert_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[943px] text-[#1e1e1e] text-[18px] top-[408px] tracking-[0.15px]">{`Rank 5 : `}</p>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents left-[486px] top-[231px]" data-name="box 1">
      <div className="absolute bg-white h-[342px] left-[486px] rounded-[5px] shadow-[0px_83px_23px_0px_rgba(200,200,200,0),0px_53px_21px_0px_rgba(200,200,200,0.01),0px_30px_18px_0px_rgba(200,200,200,0.05),0px_13px_13px_0px_rgba(200,200,200,0.09),0px_3px_7px_0px_rgba(200,200,200,0.1)] top-[231px] w-[992px]" />
      <Group4 />
      <Rank />
      <Rank1 />
      <Rank2 />
      <Rank3 />
      <Rank4 />
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
          <path d={svgPaths.pc26a3c0} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="0.6" />
          <path d={svgPaths.p3e172b80} fill="var(--fill-0, #1E1E1E)" id="Vector_2" stroke="var(--stroke-0, #F5F7FA)" strokeWidth="0.6" />
        </g>
      </svg>
    </div>
  );
}

function ButtnResponsible() {
  return (
    <div className="absolute contents left-[26px] top-[595px]" data-name="buttn responsible">
      <div className="absolute bg-[rgba(245,247,250,0)] h-[61px] left-[26px] rounded-[31px] top-[595px] w-[355px]" />
      <AntDesignSafetyOutlined />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[103px] text-[20px] text-black top-[calc(50%+65.5px)] tracking-[0.15px]">Responsible Use</p>
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
            <path d={svgPaths.pfd3580} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.p29c8ac00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p25a7fb60} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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
      <div className="absolute bg-[#6155f5] h-[61px] left-[26px] rounded-[31px] top-[387px] w-[355px]" />
      <StreamlinePlumpAiGeneratePortraitImageSpark />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[0] left-[103px] text-[20px] text-white top-[calc(50%-142.5px)] tracking-[0.15px]">
        <span className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px]">Your Identity</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="font-['Open_Sans:Regular',sans-serif] leading-[24px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`&`}</span>
        <span className="leading-[24px]">{` `}</span>
        <span className="font-['Albert_Sans:Medium',sans-serif] font-medium leading-[24px]">Values</span>
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
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-[1287px] top-[888px] w-[191px]" data-name="save btn">
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
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-[1073px] top-[888px] w-[191px]" data-name="discard btn">
      <Content1 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[1073px] top-[888px]">
      <SaveBtn />
      <DiscardBtn />
    </div>
  );
}

export default function IdentityValuesAuthenticity() {
  return (
    <div className="bg-[#fffffb] overflow-clip relative rounded-[24px] size-full" data-name="Identity & Values (Authenticity)">
      <Box1 />
      <Box />
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[486px] text-[34px] text-black top-[66px] tracking-[0.15px]">Your Identity and Values</p>
      <p className="absolute font-['Albert_Sans:Regular',sans-serif] font-normal leading-[24px] left-[486px] text-[#454545] text-[20px] top-[122px] tracking-[0.15px]">{`Define AI’s understanding of your persona and preferences `}</p>
      <NavPanel />
      <Group9 />
    </div>
  );
}