using FluentValidation;

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
}
