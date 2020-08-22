class Api::BillsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @bills = user.bills
    @bills.concat(user.co_bills)
    render :index
  end

  def create
    @bill = Bill.new(bill_params)
    if @bill.save
      render :show
    else
      render json: @bill.errors.full_messages, status: 402
    end
  end

  def edit
    @bill = Bill.find_by(id: params[:id])
    if @bill.update(bill_params)
      render :show
    else
      render json: @bill.errors.full_messages, status: 402
    end
  end

  def show
    @bill = Bill.find_by(id: params[:id])
    if @bill
      render :show
    else
      render json: ["Transaction not found"], status: 404
    end
  end

  def destroy
    @bill = Bill.find_by(id: params[:id])
    if @bill
      @bill.destroy
      render :show
    else
      render json: ['Transaction not found'], status: 404
    end

  end

  private
  def bill_params
    params.require(:bill).permit(:description, :category, :amount, :split, :author_id, :pay_partner_id)
  end
end
