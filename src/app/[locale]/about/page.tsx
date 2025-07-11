import { useTranslations } from 'next-intl';
import { Tractor, User, Globe2, Lightbulb } from 'lucide-react';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default function AboutUsPage() {
  const t = useTranslations('about');

  const TEAM = [
    {
      name: t('teamMembers.0.name'),
      role: t('teamMembers.0.role'),
      img: '',
      description: t('teamMembers.0.description'),
    },
    {
      name: t('teamMembers.1.name'),
      role: t('teamMembers.1.role'),
      img: '',
      description: t('teamMembers.1.description'),
    },
    {
      name: t('teamMembers.2.name'),
      role: t('teamMembers.2.role'),
      img: '',
      description: t('teamMembers.2.description'),
    },
    {
      name: t('teamMembers.3.name'),
      role: t('teamMembers.3.role'),
      img: '',
      description: t('teamMembers.3.description'),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f3f7f4] to-[#e6f3ed] text-gray-800">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 pt-20 pb-36">
        {/* HEADER */}
        <section className="text-center mb-14 mt-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="bg-[#0ea47a] text-white rounded-lg px-4 py-2 uppercase text-xs font-bold tracking-wider">{t('pageTitle')}</span>
            <Tractor className="w-7 h-7 text-[#0ea47a]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow">
            {t('headline')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-[#163e33] font-medium">
            {t('subheadline')}
          </p>
        </section>

        {/* MISSION */}
        <section className="rounded-xl bg-white/90 border border-[#def5ed] p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-[#12d39d] rounded-xl mb-4 md:mb-0 shadow-lg">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">{t('missionTitle')}</h2>
            <p className="text-gray-700 text-lg">
              {t('mission')}
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="md:grid md:grid-cols-2 md:gap-10 mb-20 items-center flex flex-col">
          <div>
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">{t('storyTitle')}</h2>
            <p className="text-gray-700 text-lg mb-4">
              {t('story')}
            </p>
            <ul className="list-disc ml-5 text-[#0ea47a] text-base space-y-1">
              {t.raw('storyItems').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex md:justify-end md:-mt-10 mt-8 justify-center">
            <Globe2 className="w-32 h-32 text-[#12d39d]" />
          </div>
        </section>

        {/* VALUES */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">{t('valuesTitle')}</h2>
            <div className="h-1 w-10 bg-[#12d39d] rounded-lg mb-4" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
            {t.raw('valuesList').map((value: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: value }} />
            ))}
          </ul>
        </section>

        {/* TEAM */}
        <section className="mb-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="bg-[#0ea47a] text-white rounded-lg px-4 py-2 uppercase text-xs font-bold tracking-wider">{t('teamTitle')}</span>
              <User className="w-6 h-6 text-[#0ea47a]" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">{t('teamHeadline')}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white border border-[#def5ed] p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0ea47a]">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}