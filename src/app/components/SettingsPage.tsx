import { createPortal } from 'react-dom';
import { useState, useRef, useEffect } from 'react';
import {
  X, Settings, Cpu, Sparkles, Target, ShieldCheck, Bell, User, ChevronDown, Info,
} from 'lucide-react';

type NavSection =
  | 'general'
  | 'ai-autonomy'
  | 'identity'
  | 'goal-alignment'
  | 'responsible-use'
  | 'notifications'
  | 'account';

// ─── Shared UI primitives ─────────────────────────────────────────────────────

function InfoTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, anchorRight: false, above: true });
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipWidth = 240;
      const spaceOnRight = window.innerWidth - rect.left;
      const anchorRight = spaceOnRight < tooltipWidth;

      setPos({
        top: rect.top > 160 ? rect.top - 8 : rect.bottom + 8,
        left: anchorRight ? rect.right : rect.left + rect.width / 2,
        anchorRight,
        above: rect.top > 160,
      });
    }
    setShow(true);
  };

  return (
    <span className="relative inline-flex items-center ml-1.5 flex-shrink-0">
      <button
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShow(false)}
        className="text-[#6155f5] hover:text-[#4f46e5] transition-colors focus:outline-none"
        tabIndex={-1}
        type="button"
        aria-label="More information"
      >
        <Info className="w-3.5 h-3.5" />
      </button>

      {show && typeof window !== 'undefined' && createPortal(
        <div
          className="fixed z-[9999] w-60 bg-white rounded-[8px] shadow-[0_8px_28px_rgba(0,0,0,0.18)] border border-gray-100 px-3.5 py-3 pointer-events-none"
          style={{
            top: pos.above ? undefined : pos.top,
            bottom: pos.above ? window.innerHeight - pos.top : undefined,
            left: pos.anchorRight ? undefined : pos.left,
            right: pos.anchorRight ? window.innerWidth - pos.left : undefined,
            transform: pos.anchorRight ? undefined : 'translateX(-50%)',
          }}
        >
          <p className="text-[12px] text-[#333] leading-relaxed">{text}</p>
          <div
            className={`absolute w-2.5 h-2.5 bg-white rotate-45 border-gray-100 ${
              pos.above
                ? 'top-full -mt-[6px] border-b border-r'
                : 'bottom-full -mb-[6px] border-t border-l'
            } ${pos.anchorRight ? 'right-1' : 'left-1/2 -translate-x-1/2'}`}
          />
        </div>,
        document.body
      )}
    </span>
  );
}

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
        checked ? 'bg-[#34c759]' : 'bg-[rgba(60,60,67,0.3)]'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ${
          checked ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

function SettingsSelect({
  value,
  options,
  onChange,
  minWidth = '180px',
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  minWidth?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex-shrink-0" style={{ minWidth }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between bg-[#f0f4ff] border border-[#6786e2] rounded-[5px] px-3 py-2 text-[#1e1e1e]"
      >
        <span className="font-medium text-[13px] mr-2 whitespace-nowrap">{value}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 text-[#1D1B20]" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#6786e2] rounded-[5px] shadow-lg z-30">
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-3 py-2 text-[13px] hover:bg-[#f0f4ff] transition-colors ${
                opt === value ? 'font-medium bg-[#f0f4ff]' : ''
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SettingsCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_3px_7px_rgba(200,200,200,0.1),0px_13px_13px_rgba(200,200,200,0.09),0px_30px_18px_rgba(200,200,200,0.05)]">
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-[#696372] mx-6 opacity-25" />;
}

function CardRow({
  title,
  subtitle,
  info,
  children,
  noPaddingBottom,
}: {
  title: string;
  subtitle: string;
  info?: string;
  children?: React.ReactNode;
  noPaddingBottom?: boolean;
}) {
  return (
    <div className={`flex items-start justify-between px-6 pt-5 ${noPaddingBottom ? 'pb-3' : 'pb-5'}`}>
      <div className="flex-1 mr-6 min-w-0">
        <div className="flex items-center">
          <p className="font-medium text-[15px] text-[#454545] leading-tight">{title}</p>
          {info && <InfoTooltip text={info} />}
        </div>
        <p className="italic text-[12px] text-[#696372] mt-1 leading-snug">{subtitle}</p>
      </div>
      {children && <div className="flex-shrink-0 mt-0.5">{children}</div>}
    </div>
  );
}

function RadioOption({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button onClick={onChange} className="flex items-start gap-3 text-left">
      <div
        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
          checked ? 'border-[#2C2C2C] bg-[#E6E6E6]' : 'border-[#757575] bg-white'
        }`}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-[#1e1e1e]" />}
      </div>
      <div>
        <p className="text-[13px] text-[#1e1e1e]">{label}</p>
        {description && <p className="text-[11px] text-[#757575] mt-0.5">{description}</p>}
      </div>
    </button>
  );
}

// ─── Section: AI Autonomy & Interaction ──────────────────────────────────────

function AIAutonomySection() {
  const [aiInitiative, setAiInitiative] = useState('Co-Pilot (Default)');
  const [sessionReversibility, setSessionReversibility] = useState(true);
  const [contextualScope, setContextualScope] = useState('Current Session Only');

  const initiativeOptions = ['Passive', 'Co-Pilot (Default)', 'Delegate', 'Execute'];
  const scopeOptions = ['Current Session Only', 'All Sessions', 'Verify'];

  const initiativeDesc: Record<string, string> = {
    Passive: 'Passive mode: AI only responds when directly asked — no proactive suggestions or actions',
    'Co-Pilot (Default)': 'Co-Pilot mode: AI assists, drafts, and offers suggestions, but always needs your consent before acting',
    Delegate: 'Delegate mode: AI handles defined task types independently, checking in only for ambiguous decisions',
    Execute: 'Execute mode: AI acts fully autonomously on all approved tasks without requiring confirmation',
  };
  const scopeDesc: Record<string, string> = {
    'Current Session Only': 'AI only uses the current chat history, ignores saved goals and long term memory',
    'All Sessions': 'AI can access all past session data to provide richer, more contextual responses',
    Verify: 'AI confirms at the start of any new chat if it should use past session data or not',
  };

  return (
    <div className="space-y-4">
      <SettingsCard>
        <CardRow title="AI Initiative Level" subtitle="Adjust how proactively the AI acts" info="Controls how autonomously the AI acts on your behalf — from fully manual (you decide every step) to autopilot (AI handles approved tasks independently without prompting you)." noPaddingBottom>
          <SettingsSelect value={aiInitiative} options={initiativeOptions} onChange={setAiInitiative} minWidth="200px" />
        </CardRow>
        <Divider />
        <p className="px-6 py-3 text-[12px] text-[#696372]">{initiativeDesc[aiInitiative]}</p>
      </SettingsCard>

      <SettingsCard>
        <CardRow
          title="Session Reversibility and Undo"
          subtitle="Enable advanced 'undo' capabilities and roll back to multi step actions"
          info="Tracks every AI action within a session so you can roll back to any prior state. Especially useful when multi-step tasks produce unexpected results and you need to revert cleanly."
        >
          <ToggleSwitch checked={sessionReversibility} onChange={() => setSessionReversibility(v => !v)} />
        </CardRow>
      </SettingsCard>

      <SettingsCard>
        <CardRow title="Contextual Scope" subtitle="Control which data pools the AI can use for context" info="Defines which data sources the AI is allowed to reference when generating a response — from only the current chat to all past sessions, long-term memory, and saved personal preferences." noPaddingBottom>
          <SettingsSelect value={contextualScope} options={scopeOptions} onChange={setContextualScope} minWidth="210px" />
        </CardRow>
        <Divider />
        <p className="px-6 py-3 text-[12px] text-[#696372]">{scopeDesc[contextualScope]}</p>
      </SettingsCard>
    </div>
  );
}

// ─── Section: Your Identity & Values ─────────────────────────────────────────

const coreValueOptions = [
  'Warmth', 'Directness', 'Formality', 'Precision',
  'Empathy', 'Clarity', 'Brevity', 'Other (user defined)',
];

function IdentityValuesSection() {
  const [coreValues, setCoreValues] = useState([
    'Warmth', 'Directness', 'Formality', 'Precision', 'Other (user defined)',
  ]);
  const [toneAdjustment, setToneAdjustment] = useState(false);
  const [tonePriority, setTonePriority] = useState('empathy');

  const updateRank = (i: number, v: string) => {
    const next = [...coreValues];
    next[i] = v;
    setCoreValues(next);
  };

  return (
    <div className="space-y-4">
      <SettingsCard>
        <div className="px-6 pt-5 pb-5">
          <p className="font-medium text-[15px] text-[#454545] leading-tight">Prioritize Your Core Values</p>
          <p className="italic text-[12px] text-[#696372] mt-1">
            Rank or adjust the importance of key communication and interaction values
          </p>
          <div className="mt-5 grid grid-cols-2 gap-x-12 gap-y-3">
            {[0, 1, 2].map(i => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-semibold text-[13px] text-[#1e1e1e] whitespace-nowrap w-14 flex-shrink-0">
                  Rank {i + 1} :
                </span>
                <SettingsSelect
                  value={coreValues[i]}
                  options={coreValueOptions}
                  onChange={v => updateRank(i, v)}
                  minWidth="150px"
                />
              </div>
            ))}
            {[3, 4].map(i => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-semibold text-[13px] text-[#1e1e1e] whitespace-nowrap w-14 flex-shrink-0">
                  Rank {i + 1} :
                </span>
                <SettingsSelect
                  value={coreValues[i]}
                  options={coreValueOptions}
                  onChange={v => updateRank(i, v)}
                  minWidth="150px"
                />
              </div>
            ))}
          </div>
        </div>
      </SettingsCard>

      <SettingsCard>
        <CardRow
          title="Contextual Tone Adjustment"
          subtitle="Allow AI to self adjust its tone (eg., more supportive, more formal) based on the detected emotional context or specific task within a conversation."
          noPaddingBottom={!toneAdjustment}
        >
          <ToggleSwitch checked={toneAdjustment} onChange={() => setToneAdjustment(v => !v)} />
        </CardRow>
        {!toneAdjustment && (
          <div className="mx-6 mb-6 mt-2 bg-[rgba(242,242,242,0.6)] rounded-[8px] p-5">
            <p className="font-medium text-[12px] text-[#454545] mb-3">Default Adaption Tone Priority :</p>
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <RadioOption label="Empathy First" description="Explains process first" checked={tonePriority === 'empathy'} onChange={() => setTonePriority('empathy')} />
              <RadioOption label="Task First" description="Shows solution only" checked={tonePriority === 'task'} onChange={() => setTonePriority('task')} />
              <RadioOption label="Balanced" description="Some explanation with the solution" checked={tonePriority === 'balanced'} onChange={() => setTonePriority('balanced')} />
            </div>
          </div>
        )}
      </SettingsCard>
    </div>
  );
}

// ─── Section: Goal Alignment & Clarity ───────────────────────────────────────

function GoalAlignmentSection() {
  const [linkPastSessions, setLinkPastSessions] = useState(true);
  const [proactiveClarify, setProactiveClarify] = useState(true);
  const [clarifyTopics, setClarifyTopics] = useState('new-topics');
  const [showThoughtProcess, setShowThoughtProcess] = useState(false);
  const [thoughtFormat, setThoughtFormat] = useState('List (Summary)');

  const formatOptions = ['List (Summary)', 'Detailed', 'Visual', 'Minimal'];

  return (
    <div className="space-y-4">
      <SettingsCard>
        <CardRow
          title="Link to Past Sessions Identifying Active Goals"
          subtitle="Allow AI to suggest linking conversations to your active goals based on chat context."
          info="When enabled, the AI analyses your current conversation and suggests connecting it to any active goals you've previously defined, helping maintain continuity and progress tracking across sessions."
        >
          <ToggleSwitch checked={linkPastSessions} onChange={() => setLinkPastSessions(v => !v)} />
        </CardRow>
      </SettingsCard>

      <SettingsCard>
        <CardRow
          title="Proactively Clarify Ambiguous Prompts"
          subtitle="If your prompt seems unclear, incomplete, or lacks necessary information, AI will ask for clarification before responding"
          noPaddingBottom={proactiveClarify}
        >
          <ToggleSwitch checked={proactiveClarify} onChange={() => setProactiveClarify(v => !v)} />
        </CardRow>
        {proactiveClarify && (
          <div className="px-6 pb-5 pt-3 flex gap-10">
            <RadioOption label="New Topics Only" checked={clarifyTopics === 'new-topics'} onChange={() => setClarifyTopics('new-topics')} />
            <RadioOption label="All Topics" checked={clarifyTopics === 'all-topics'} onChange={() => setClarifyTopics('all-topics')} />
          </div>
        )}
      </SettingsCard>

      <SettingsCard>
        <CardRow
          title="Show AI Thought Process in Chat"
          subtitle={`Enable the "Explain my Reasoning" option next to a response to see how it formulated its answer`}
          noPaddingBottom={showThoughtProcess}
        >
          <ToggleSwitch checked={showThoughtProcess} onChange={() => setShowThoughtProcess(v => !v)} />
        </CardRow>
        {showThoughtProcess && (
          <>
            <div className="px-6 pb-3">
              <SettingsSelect value={thoughtFormat} options={formatOptions} onChange={setThoughtFormat} minWidth="160px" />
            </div>
            <Divider />
            <p className="px-6 py-3 text-[12px] text-[#696372]">
              Choose the default visual format for how AI's explanation is displayed
            </p>
          </>
        )}
      </SettingsCard>
    </div>
  );
}

// ─── Section: Responsible Use ─────────────────────────────────────────────────

function ResponsibleUseSection() {
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [flagBias, setFlagBias] = useState(true);
  const [suggestAlternatives, setSuggestAlternatives] = useState(false);
  const [confirmSensitiveData, setConfirmSensitiveData] = useState(true);

  const ethicalItems = [
    {
      key: 'bias',
      label: 'Flag potential bias in response',
      desc: 'Customize how proactively AI flags for bias, sensitive data and diverse perspective',
      checked: flagBias,
      toggle: () => setFlagBias(v => !v),
    },
    {
      key: 'alt',
      label: 'Suggest alternative viewpoints',
      desc: 'The AI will offer alternative perspectives or counter arguments for controversial/complex topics',
      checked: suggestAlternatives,
      toggle: () => setSuggestAlternatives(v => !v),
    },
    {
      key: 'sens',
      label: 'Confirm sensitive data usage',
      desc: 'Receive explicit confirmation when using highly sensitive data (eg., health, financial) in a response',
      checked: confirmSensitiveData,
      toggle: () => setConfirmSensitiveData(v => !v),
    },
  ];

  return (
    <div className="space-y-4">
      <SettingsCard>
        <CardRow
          title="Enable Critical Alerts for Sensitive Topics"
          subtitle="Receive warnings and reminders to verify information with external sources when discussing high risk topic"
          noPaddingBottom
        >
          <ToggleSwitch checked={criticalAlerts} onChange={() => setCriticalAlerts(v => !v)} />
        </CardRow>
        <div className="mx-6 mb-5 mt-2 bg-[rgba(242,242,242,0.6)] rounded-[8px] px-5 py-4 min-h-[60px] flex items-center">
          <p className="text-[12px] text-[#9a9a9a] italic">AI Detected Alert Topics show up here</p>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div className="px-6 pt-5 pb-3">
          <p className="font-medium text-[15px] text-[#454545]">AI Ethical Behavior Controls</p>
          <p className="italic text-[12px] text-[#696372] mt-1">
            Customize how proactively AI flags for bias, sensitive data and diverse perspective
          </p>
        </div>
        <Divider />
        {ethicalItems.map((item, idx) => (
          <div key={item.key}>
            <div className="flex items-start justify-between px-6 py-4">
              <div className="flex-1 mr-6 min-w-0">
                <p className="text-[13px] text-[#454545]">{item.label}</p>
                <p className="italic text-[12px] text-[#696372] mt-0.5 leading-snug">{item.desc}</p>
              </div>
              <ToggleSwitch checked={item.checked} onChange={item.toggle} />
            </div>
            {idx < ethicalItems.length - 1 && <Divider />}
          </div>
        ))}
      </SettingsCard>
    </div>
  );
}

// ─── Section: General ─────────────────────────────────────────────────────────

function GeneralSection() {
  const [theme, setTheme] = useState('System');
  const [language, setLanguage] = useState('English');
  const [fontSize, setFontSize] = useState('Medium');
  const [compactMode, setCompactMode] = useState(false);

  return (
    <div className="space-y-4">
      <SettingsCard>
        <div className="px-6 pt-5 pb-5">
          <p className="font-medium text-[15px] text-[#454545]">Appearance</p>
          <p className="italic text-[12px] text-[#696372] mt-1">Customize the look and feel of the application</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-[#454545]">Theme</p>
              <SettingsSelect value={theme} options={['System', 'Light', 'Dark']} onChange={setTheme} minWidth="140px" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-[#454545]">Font Size</p>
              <SettingsSelect value={fontSize} options={['Small', 'Medium', 'Large']} onChange={setFontSize} minWidth="140px" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[13px] text-[#454545]">Compact Mode</p>
                <p className="italic text-[12px] text-[#696372] mt-0.5">Reduce spacing for more content on screen</p>
              </div>
              <ToggleSwitch checked={compactMode} onChange={() => setCompactMode(v => !v)} />
            </div>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div className="px-6 pt-5 pb-5">
          <p className="font-medium text-[15px] text-[#454545]">Language & Region</p>
          <p className="italic text-[12px] text-[#696372] mt-1">Set your preferred language and regional settings</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[13px] text-[#454545]">Language</p>
            <SettingsSelect
              value={language}
              options={['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese']}
              onChange={setLanguage}
              minWidth="140px"
            />
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}

// ─── Section: Notifications ───────────────────────────────────────────────────

function NotificationsSection() {
  const [items, setItems] = useState([
    { key: 'email', label: 'Email Notifications', desc: 'Receive session summaries and updates via email', checked: true },
    { key: 'push', label: 'Push Notifications', desc: 'Get real-time alerts in your browser', checked: true },
    { key: 'summary', label: 'Session Summary', desc: 'Receive a summary at the end of each chat session', checked: false },
    { key: 'goals', label: 'Goal Reminders', desc: 'Get reminders about your active goals and progress', checked: true },
  ]);

  const toggle = (key: string) =>
    setItems(prev => prev.map(i => (i.key === key ? { ...i, checked: !i.checked } : i)));

  return (
    <div className="space-y-4">
      <SettingsCard>
        <div className="px-6 pt-5 pb-3">
          <p className="font-medium text-[15px] text-[#454545]">Notification Preferences</p>
          <p className="italic text-[12px] text-[#696372] mt-1">Control how and when you receive notifications</p>
        </div>
        <Divider />
        {items.map((item, idx) => (
          <div key={item.key}>
            <div className="flex items-start justify-between px-6 py-4">
              <div className="flex-1 mr-6">
                <p className="text-[13px] text-[#454545]">{item.label}</p>
                <p className="italic text-[12px] text-[#696372] mt-0.5">{item.desc}</p>
              </div>
              <ToggleSwitch checked={item.checked} onChange={() => toggle(item.key)} />
            </div>
            {idx < items.length - 1 && <Divider />}
          </div>
        ))}
      </SettingsCard>
    </div>
  );
}

// ─── Section: Account ─────────────────────────────────────────────────────────

function AccountSection() {
  return (
    <div className="space-y-4">
      <SettingsCard>
        <div className="px-6 py-5 flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-[#6155f5] flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-medium text-[15px] text-[#1e1e1e]">User Account</p>
            <p className="text-[12px] text-[#696372] mt-0.5">user@example.com</p>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard>
        <div className="px-6 pt-5 pb-5">
          <p className="font-medium text-[15px] text-[#454545] mb-4">Account Settings</p>
          <div className="space-y-2">
            {['Edit Profile', 'Change Password', 'Manage Subscription', 'Export Data'].map(label => (
              <button
                key={label}
                className="w-full text-left px-4 py-3 rounded-[6px] border border-gray-200 text-[13px] text-[#454545] hover:bg-gray-50 transition-colors"
              >
                {label}
              </button>
            ))}
            <button className="w-full text-left px-4 py-3 rounded-[6px] border border-red-200 text-[13px] text-red-500 hover:bg-red-50 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </SettingsCard>
    </div>
  );
}

// ─── Nav panel ────────────────────────────────────────────────────────────────

const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
  {
    id: 'general',
    label: 'General',
    icon: <Settings className="w-[17px] h-[17px]" />,
  },
  {
    id: 'ai-autonomy',
    label: 'AI Autonomy & Interaction',
    icon: <Cpu className="w-[17px] h-[17px]" />,
  },
  {
    id: 'identity',
    label: 'Your Identity & Values',
    icon: <Sparkles className="w-[17px] h-[17px]" />,
  },
  {
    id: 'goal-alignment',
    label: 'Goal Alignment & Clarity',
    icon: <Target className="w-[17px] h-[17px]" />,
  },
  {
    id: 'responsible-use',
    label: 'Responsible Use',
    icon: <ShieldCheck className="w-[17px] h-[17px]" />,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell className="w-[17px] h-[17px]" />,
  },
  {
    id: 'account',
    label: 'Account',
    icon: <User className="w-[17px] h-[17px]" />,
  },
];

const sectionMeta: Record<NavSection, { title: string; subtitle: string }> = {
  general: {
    title: 'General',
    subtitle: 'Manage appearance, language and regional preferences',
  },
  'ai-autonomy': {
    title: 'AI Autonomy and Interaction',
    subtitle: 'Control how much the AI acts on own, and how your personal data is used.',
  },
  identity: {
    title: 'Your Identity and Values',
    subtitle: "Define AI's understanding of your persona and preferences",
  },
  'goal-alignment': {
    title: 'Goal Alignment and Clarity',
    subtitle: "Define AI's understanding of your persona and preference",
  },
  'responsible-use': {
    title: 'Responsible Use',
    subtitle: "Set boundaries for sensitive topics and review AI's ethical choices and alerts",
  },
  notifications: {
    title: 'Notifications',
    subtitle: 'Manage how and when you receive alerts and updates',
  },
  account: {
    title: 'Account',
    subtitle: 'Manage your account details, security, and subscription',
  },
};

// ─── Main SettingsPage ────────────────────────────────────────────────────────

export function SettingsPage({ onClose }: { onClose: () => void }) {
  const [activeSection, setActiveSection] = useState<NavSection>('ai-autonomy');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'general': return <GeneralSection />;
      case 'ai-autonomy': return <AIAutonomySection />;
      case 'identity': return <IdentityValuesSection />;
      case 'goal-alignment': return <GoalAlignmentSection />;
      case 'responsible-use': return <ResponsibleUseSection />;
      case 'notifications': return <NotificationsSection />;
      case 'account': return <AccountSection />;
    }
  };

  const meta = sectionMeta[activeSection];

  return (
    <div
      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#fffffb] rounded-[24px] w-full h-full max-w-[1000px] max-h-[660px] flex overflow-hidden shadow-2xl">

        {/* ── Left Nav Panel ── */}
        <div className="w-[250px] bg-[#f5f7fa] flex-shrink-0 flex flex-col py-5 relative">
          {/* Close / FAB button */}
          <div className="px-5 mb-5">
            <button
              onClick={onClose}
              className="w-[44px] h-[44px] rounded-full bg-[#fffffb] border border-[#35323a] flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Close settings"
            >
              <X className="w-4 h-4 text-[#1e1e1e]" />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            {navItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-[13px] rounded-[31px] transition-colors text-left ${
                    isActive
                      ? 'bg-[#6155f5] text-white'
                      : 'text-black hover:bg-black/5'
                  }`}
                >
                  <span className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-[#1E1E1E]'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-[13px] leading-snug ${isActive ? 'font-medium' : 'font-normal'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ── Right Content ── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content scrollable area */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {/* Page header */}
            <div className="mb-5">
              <h1 className="text-[20px] font-semibold text-black leading-tight">{meta.title}</h1>
              <p className="text-[12px] text-[#696372] mt-1">{meta.subtitle}</p>
            </div>

            {/* Section content */}
            {renderSection()}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 px-10 py-4 border-t border-gray-100 flex-shrink-0">
            <button
              onClick={onClose}
              className="h-[36px] px-5 rounded-full border border-black text-[13px] text-[#1e1e1e] hover:bg-gray-50 transition-colors"
            >
              Discard Changes
            </button>
            <button
              onClick={handleSave}
              className={`h-[36px] px-6 rounded-full text-[13px] font-semibold text-white transition-colors ${
                saved ? 'bg-[#34c759]' : 'bg-[#3221ff] hover:bg-[#2a1de0]'
              }`}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
