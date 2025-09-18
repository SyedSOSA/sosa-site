import Layout from '../components/Layout'
import SuccessCard from '../components/SuccessCard'

const people = [
  { name: 'Farheen Nahid', role: 'IT Professional', location: 'Dubai', story: 'Got an IT job in Dubai within 20 days after resume revamp and targeted referrals.' },
  { name: 'Mohit', role: 'Hospitality Manager', location: 'Sharjah', story: 'Secured a hotel management role after 6 months with interview coaching.' },
  { name: 'Sheethal Raj', role: 'HR Executive', location: 'Dubai', story: 'As a fresher, landed her first HR role after tailored coaching.' },
  { name: 'Kavya', role: 'Marketing Specialist', location: 'Abu Dhabi', story: 'Transitioned to a Digital Marketing role with portfolio and LinkedIn optimization.' },
  { name: 'Shruthi', role: 'Finance Executive', location: 'Dubai', story: 'Landed an Accounts & Finance role in Dubai within 30 days through targeted applications.' }
]

export default function SuccessStories() {
  return (
    <Layout>
      <section className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Success Stories</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {people.map((p, idx) => (
            <SuccessCard key={idx} person={p} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
