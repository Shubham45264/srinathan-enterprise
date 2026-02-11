const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Fleet Vehicles" },
  { value: "50K+", label: "Deliveries Completed" },
];

const Stats = () => {
  return (
    <section className="bg-primary">
      <div className="container-narrow section-padding !py-12 lg:!py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-1">
                {value}
              </div>
              <div className="text-sm text-primary-foreground/70 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
