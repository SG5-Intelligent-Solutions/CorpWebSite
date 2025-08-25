import ServiceCard from "../../../../components/ui/serviceCard";

const ServiceColumn = ({ services, colId }) => {
  return (
    <div
      className={`flex flex-col gap-8 w-full lg:w-1/3 ${colId === 2 ? "mt-0 lg:mt-20" : ""
        }`}
    >
      {services
        ?.filter((service) => service.col_id === colId)
        ?.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
    </div>
  );
};

export default ServiceColumn;
