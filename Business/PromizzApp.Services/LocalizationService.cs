using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

using PromizzApp.Data.Interfaces;
using PromizzApp.Domain;
using PromizzApp.Models;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.Services
{
    public class LocalizationService : ILocalizationService
    {
        #region Declaration & Ctor

        private readonly IRepository<Localization> _localizationRepository;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Language> _languageRepository;

        public LocalizationService(
            IRepository<Localization> localizationRepository,
            IRepository<User> userRepository,
            IRepository<Language> languageRepository
            )
        {
            _localizationRepository = localizationRepository;
            _languageRepository = languageRepository;
            _userRepository = userRepository;
        }

        #endregion

        public Dictionary<string, string> LoadLocalization(string language)
        {
            var langToLower = "";
            if (!string.IsNullOrEmpty(language))
            {
                langToLower = language.Trim().ToLower();
            }
            else
            {
                var defaultLanguage = _languageRepository.GetAll().FirstOrDefault(l => l.IsDefault);
                if (defaultLanguage == null)
                    throw new Exception("CAN_FIND_DEFAULT_LANGUAGE");

                langToLower = defaultLanguage.ShortName.ToLower();
            }

            return _localizationRepository.GetAll()
                    .Where(l => l.LanguageShortName.ToLower() == langToLower)
                        .Select(l => l).ToDictionary(l => l.Key, l => l.Value);

        }
    }
}
