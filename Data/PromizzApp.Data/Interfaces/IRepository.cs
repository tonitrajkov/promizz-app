using System.Collections.Generic;
using System.Threading.Tasks;

namespace PromizzApp.Data.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T GetById(object id);

        Task<T> GetByIdAsync(object id);

        IEnumerable<T> GetAll();

        Task<IEnumerable<T>> GetAllAsync();

        void Create(T entity);

        Task CreateAsync(T entity);

        void Update(T entity);

        Task UpdateAsync(T entity);

        void Delete(T entity);

        Task DeleteAsync(T entity);
    }
}