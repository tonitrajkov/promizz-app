using FluentValidation;
using System;

namespace PromizzApp.Models.Validators
{
    public class PromiseValidator : AbstractValidator<PromiseModel>
    {
        public PromiseValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("REQUIRED_FIELD")
                .Length(0, 1000).WithMessage("REQUIRED_FIELD");

        }
    }

    public class PromiseAddValidator : AbstractValidator<PromiseAddModel>
    {
        public PromiseAddValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("REQUIRED_FIELD")
                .Length(0, 1000).WithMessage("REQUIRED_FIELD");

            RuleFor(x => x.Promisees)
                .NotNull()
                .WithMessage("REQUIRED_FIELD")
                .NotEmpty()
                .WithMessage("REQUIRED_FIELD");

            RuleFor(x => x.EndDate)
               .Must(BeAValidDate)
               .WithMessage("REQUIRED_FIELD");
        }


        private bool BeAValidDate(DateTime date)
        {
            return !date.Equals(default(DateTime));
        }

        private bool BeValidNumber(int number)
        {
            return !number.Equals(0);
        }
    }
}
